/**
 * @Script js for (Template/Project Name)
 *
 * @project     - idea elan
 * @author      - 
 * @created_by  - kawsar bin siraj
 * @created_at  - 09-12-2020
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // set white bg in body 
    // - only for reports page
    $(function () {
        if ($('#reportsMainPage').length) {
            $('body').css({
                'backgroundColor': '#ffffff'
            })
        }
    });


    // automatic addClass navigation-sidebar-collapsed 
    // for $(window).width() < 992
    $(function () {
        if ($(window).width() < 992) {
            $('body').addClass('navigation-sidebar-collapsed');
            $('#navigation-sidebar').addClass('navigation-sidebar-collapsed');
        }
    });


    // calculate perStepWidth
    // for invoice details page 
    // and push it inline variable by css
    $(function () {
        let totalStep = 5;
        let stepStepsWidth = $('#step-steps').outerWidth();
        let perStepWidth = Math.ceil(stepStepsWidth / totalStep);
        $('#step-steps').css('--perStepWidth', `calc(${perStepWidth}px + 20px)`);
        $('#step-steps li > .border-line').on('click', function (event) {
            event.stopPropagation();
        });
    });


    // automatic set max height in 
    // - currentUserDropdownMenu
    $(function () {
        let windowHeight = $(window).outerHeight();
        let userProfileOffsetTop = $('.dashboard-current-user').offset().top;
        let difference = windowHeight - userProfileOffsetTop;
        let currentUserDropdownMenu = $('.dashboard-current-user .user-profile-dropdown-menu').outerHeight();
        if (difference > 0) {
            if (currentUserDropdownMenu > difference) {
                $('.dashboard-current-user .user-profile-dropdown-menu').css({
                    'maxHeight': `calc(${difference}px - 50px)`,
                    'overflowX': 'auto'
                })
            }
        }
    });

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {
    // slideToggle in navigation-sidebar 
    // for dropdown nav-link
    // $(function () {
    //     if ($('#navigation-sidebar').length) {
    //         $('#navigation-sidebar li.nav-item.dropdown > a.dropdown-toggle').on('click', function (e) {
    //             e.preventDefault();
    //             let parentElement = $(this).parent('li.nav-item.dropdown');
    //             $(parentElement).siblings().find('.dropdown-menu').slideUp(500);
    //             parentElement.find("> .dropdown-menu").slideToggle(500);
    //         });
    //     }
    // });


    // $('#steps-wizard')
    $(function () {
        if ($('#steps-wizard').length) {
            $('#steps-wizard').steps({
                onFinish: function () { alert('complete'); }
            });
        }
    });


    // Reports page reports-category-grid-item active
    $(function () {
        $('.reports-category-grid-item').on('click', function (e) {
            $('.reports-category-grid-item').removeClass('current');
            $(this).addClass('current');
        });
    })


    // reservation page 
    // when recurrence on than open recurrence-wrap
    $(function () {
        $('#recurrence').on('click', function () {
            if ($(this).is(':checked')) {
                $('.recurrence-wrap').show();
            } else {
                $('.recurrence-wrap').hide();
            }
        })
    });


    // invoice kanban card sorting
    // and handler-close
    $(function () {
        if ($('#kanbanSorting').length) {
            Sortable.create(kanbanSorting, {
                handle: '.handler-move',
                animation: 150
            });
        }
        if ($('.handler-close').length) {
            $('.handler-close').on('click', function (e) {
                e.preventDefault();
                let kanbanCardInfo = $(this).closest('.kanbanCard-info');
                kanbanCardInfo.remove();
            });
        }
    });


    // $('.clone-body')
    $(function () {
        if ($('.btn-addMore').length && $('.clone-body').length) {
            $(document).on('click', '.btn-addMore', function (event) {
                event.preventDefault();
                var $clone = $(this).closest('.clone-data').clone(true);
                var $newButtons = `
                            <button type="button" class="btn btn-plus-circle mr-3 btn-removeMore">
                                <i class="ni ni-minus"></i>
                            </button>`;
                $clone.find('.btn-clone-group').html($newButtons).end().appendTo($(this).closest('.clone-data').parent().find('.clone-body'));
            });
            $(document).on('click', '.btn-removeMore', function (event) {
                event.preventDefault();
                $(this).closest('.clone-data').remove();
            });
        }
    });


    // $(".date-picker")
    $(function () {
        if ($(".date-picker").length) {
            $(".date-picker").datepicker();
        }
    });


    // btnFormGroupCollapsedToggle
    // FormGroupCollapsed-item
    $(function () {
        if ($('.btnCollapsedToggle').length && $('.collapsed-item').length) {
            $('.btnCollapsedToggle').on('click', function (e) {
                e.preventDefault();
                if ($(this).closest('.collapsed-group').find('.collapsed-item').slideToggle()) {
                    $(this).find('.ni').toggleClass('ni-plus ni-minus');
                    $(this).toggleClass('open');
                    if ($(this).hasClass('open')) {
                        $(this).find('.btnCollapsedToggle-text').text('Collapsed')
                    } else {
                        $(this).find('.btnCollapsedToggle-text').text('Expand')
                    }
                }
            });
        }
    });


    // show-less content
    $(function () {
        if ($('.btn-show-less').length) {
            $('.btn-show-less').on('click', function (e) {
                e.preventDefault();
                var dots = $(this).parent().find('.dots');
                var more = $(this).parent().find('.more-content');
                var btnShowLess = $(this);

                if (dots.hasClass('d-inline')) {
                    dots.toggleClass('d-none d-inline');
                    more.toggleClass('d-inline d-none');
                    btnShowLess.find('.btn-text').text('Show Less');
                    btnShowLess.find('.ni').toggleClass('ni-minus-circle-fill ni-plus-circle-fill');
                } else {
                    dots.toggleClass('d-none d-inline');
                    more.toggleClass('d-inline d-none');
                    btnShowLess.find('.btn-text').text('Show More');
                    btnShowLess.find('.ni').toggleClass('ni-plus-circle-fill ni-minus-circle-fill');
                }
            });
        }
    });


    // dropdownForFacility
    //  e.stopPropagation();
    $(function () {
        if ($('.dropdownForFacility').length) {
            $(document).on('click', '.dropdownForFacility .dropdown-menu', function (e) {
                e.stopPropagation();
            });
        }
    })


    // select2-init
    $(function () {
        if ($('.select2-init').length) {
            $(".select2-init").select2({
                minimumResultsForSearch: -1,
                containerCssClass: "select2Init",
                dropdownCssClass: "select2Init"
            });
        }

        if ($('.select2-init-forFacility').length) {
            $(".select2-init-forFacility").select2({
                minimumResultsForSearch: -1,
                containerCssClass: "select2-forFacility-container",
                dropdownCssClass: "select2-forFacility-dropdown"
            });
        }
    });

    // select2-init
    $(function () {
        if ($('.select2-init-closeFalse').length) {
            $(".select2-init-closeFalse").select2({
                closeOnSelect: false,
                minimumResultsForSearch: -1,
                containerCssClass: "select2Init-closeFalse",
                dropdownCssClass: "select2Init-closeFalse-dropdown"
            });
        }
    });

    // [data-toggle="tooltip"]
    $(function () {
        if ($('[data-toggle="tooltip"]').length) {
            $('[data-toggle="tooltip"]').tooltip()
        }
    });

    // sidebarToggle
    $(function () {
        if ($('.sidebarToggle').length) {
            $('.sidebarToggle').on('click', function () {
                if ($(window).width() > 768) {
                    $('body').toggleClass('navigation-sidebar-collapsed');
                    $('#navigation-sidebar').toggleClass('navigation-sidebar-collapsed');
                }
                if ($(window).width() < 768) {
                    $('#navigation-sidebar').toggleClass('transform-toggle');
                }
            });
        }
    });


    // $('#todoModal')
    // $('#autocomplete-true')
    $(function () {
        // $('#todoModal') 
        if ($('#todoModal').length) {
            $('#todoModal').on('show.bs.modal', function (e) {
                $('body').addClass("todoModal-backdrop");
            }).on('hide.bs.modal', function (e) {
                $('body').removeClass("todoModal-backdrop");
            });
        }

        // $('#autocomplete-true')
        if ($('#autocomplete-true').length) {
            var availableTagsForAutoSuggestion = [
                "Revenue over period",
                "Month over month",
                "Inventory",
                "Usage Report",
            ];
            $("#autocomplete-true").autocomplete({
                source: availableTagsForAutoSuggestion
            });
        }
    });



    // $('#btn-dropFilter')
    // $('#filterOptions-by-dropdown')
    $(function () {
        if ($('#btn-dropFilter').length) {
            $(document).on('click', function (e) {
                let trigger = $('#filterOptions-by-dropdown');
                if (e.target.id == 'btn-dropFilter' || e.target.id == 'filterIcon') {
                    trigger.toggle();
                } else {
                    if (trigger !== e.target && !trigger.has(e.target).length) {
                        trigger.hide();
                    }
                }
            });
        }
    });


    // reports todo item
    $(function () {
        if ($('#todoItems').length) {
            /**
             * @initial todoLists
             * @stored
             */
            let todoLists = [
                {
                    name: 'Revenue over period',
                    imgIconName: 'revenue-over',
                    url: 'revenue.com'
                },
                {
                    name: 'Month over month',
                    imgIconName: 'month-over',
                    url: 'month.com'
                },
                {
                    name: 'Inventory',
                    imgIconName: 'inventory',
                    url: 'inventory.com'
                },
                {
                    name: 'Usage Report',
                    imgIconName: 'usage-report',
                    url: 'usage-report.com'
                },
            ];


            /**
             * @initial appendTodoItems
             * @append todoItems
             */
            function appendTodoItems() {
                let todoItems = ''
                todoLists.map(function (item) {
                    todoItems +=
                        `<li>
                            <a class="text-decoration-none d-block" href="reports-details.html"> 
                                <span class='reports-shortcutIcon'> 
                                    <img src='assets/img/filI-icons/${item.imgIconName}.svg' alt='' class='img-fluid' />
                                </span>
                                <p class='mb-0'>${item.name}</p>
                            </a>
                        </li>\n`
                });
                $('#todoItems li:last').before(todoItems);
            }
            appendTodoItems();


            /**
             * @submit todoSubmitForm
             * @store data
             */
            $(document).on('click', '#todoDone', function (e) {
                e.preventDefault();
                var data = {
                    name: $("#shortcut-name").val(),
                    imgIconName: 'default',
                    url: $("#url").val(),
                }

                if (data.name === '' || data.name === null && data.url === '' || data.url === null) {
                    return alert('Please enter required data !!')
                } else {
                    todoLists.push(data);
                    $('#todoItems li:not(:last)').remove();
                    appendTodoItems();
                    $('#todoModal button[data-dismiss="modal"]').trigger('click');
                    $("#shortcut-name").val('');
                    $("#url").val('');
                }
            });
        }
    });


});
