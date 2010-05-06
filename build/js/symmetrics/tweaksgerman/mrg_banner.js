/**
 * Magento
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/osl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magentocommerce.com so we can send you a copy immediately.
 *
 * @category  Symmetrics
 * @package   Symmetrics_TweaksGerman
 * @author    symmetrics gmbh <info@symmetrics.de>
 * @author    Yauhen Yakimovich <yy@symmetrics.de>
 * @copyright 2010 symmetrics gmbh
 * @license   http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @link      http://www.symmetrics.de/
 */

/**
 * MRG Banner hooks
 */
document.observe('dom:loaded', function() {
    var baseUrl = BLANK_IMG.sub('js/spacer.gif','');
    var removeRelative = function(path){
        while (path.startsWith('../')) {
            path = path.sub('../','');
        }
        return path;
    }
    $$('img.mrgimg').each(function(img){
       img.writeAttribute('src', baseUrl + removeRelative(img.readAttribute('src')));
    });
});