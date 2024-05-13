<?php

use ACFComposer\ACFComposer;
use Flynt\Components;

add_action('Flynt/afterRegisterComponents', function () {
    ACFComposer::registerFieldGroup([
        'name' => 'pageComponents',
        'title' => __('Page Components', 'flynt'),
        'style' => 'seamless',
        'fields' => [
            [
                'name' => 'pageComponents',
                'label' => __('Page Components', 'flynt'),
                'type' => 'flexible_content',
                'button_label' => __('Add Component', 'flynt'),
                'layouts' => [
                    Components\AccordionDefault\getACFLayout(),
                    Components\BannerImageText\getACFLayout(),
                    Components\BlockAnchor\getACFLayout(),
                    Components\BlockCollapse\getACFLayout(),
                    Components\BlockCta\getACFLayout(),
                    Components\BlockImage\getACFLayout(),
                    Components\BlockImageText\getACFLayout(),
                    Components\BlockTextText\getACFLayout(),
                    Components\BlockWysiwyg\getACFLayout(),
                    Components\GridImageText\getACFLayout(),
                    Components\GridPostSelector\getACFLayout(),
                    Components\HeroContactForm\getACFLayout(),
                    Components\HeroImmpact\getACFLayout(),
                    Components\ListTextLink\getACFLayout(),
                    Components\ListingJobs\getACFLayout(),
                    Components\SliderBoxToggle\getACFLayout(),
                    Components\SliderImages\getACFLayout(),
                    Components\SliderPosts\getACFLayout(),
                ],
            ],
        ],
        'location' => [
            [
                [
                    'param' => 'post_type',
                    'operator' => '!=',
                    'value' => 'post'
                ],
                [
                    'param' => 'post_type',
                    'operator' => '!=',
                    'value' => 'job'
                ],
                [
                    'param' => 'post_type',
                    'operator' => '!=',
                    'value' => 'pilot'
                ],
                [
                    'param' => 'post_type',
                    'operator' => '!=',
                    'value' => 'reusable-components'
                ],
            ],
        ],
    ]);
});
