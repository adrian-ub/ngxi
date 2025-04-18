import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCroissantIcon],svg[openmoji-croissant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiCroissant0" d="m59.107 36.112l-8.018 4.769A4.99 4.99 0 0 0 56 45a5 5 0 0 0 5-5c0-1.58-.748-2.972-1.893-3.888M42 17a2 2 0 0 1 2 2l-3 15a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2l-3-15a2 2 0 0 1 2-2z"></svg:path><svg:path id="openmojiCroissant1" d="m53.496 23.576l-9.205-3.906a2 2 0 0 0-.4-.122L41 34c0 .882-.574 1.622-1.367 1.888c.201.254.459.467.777.602l3.682 1.563a2 2 0 0 0 2.623-1.06L54.557 26.2a2 2 0 0 0-1.06-2.623"></svg:path><svg:path id="openmojiCroissant2" d="m60.412 32.478l-5.756-5.556a2 2 0 0 0-.409-.297l-7.532 10.368a1.98 1.98 0 0 1-.887.967c-.13.646.057 1.344.567 1.835l1.439 1.39a2 2 0 0 0 2.828-.05l9.799-5.828a2 2 0 0 0-.049-2.829m-47.519 3.634l8.018 4.769A4.99 4.99 0 0 1 16 45a5 5 0 0 1-5-5c0-1.58.748-2.972 1.893-3.888m5.611-12.536l9.205-3.906c.13-.056.266-.095.4-.122L31 34c0 .882.574 1.622 1.367 1.888a2 2 0 0 1-.777.602l-3.682 1.563a2 2 0 0 1-2.623-1.06L17.443 26.2a2 2 0 0 1 1.06-2.623"></svg:path><svg:path id="openmojiCroissant3" d="m11.588 32.478l5.756-5.556c.125-.121.263-.216.409-.297l7.532 10.368c.183.432.504.758.887.967a1.99 1.99 0 0 1-.567 1.835l-1.439 1.39a2 2 0 0 1-2.828-.05l-9.799-5.828a2 2 0 0 1 .049-2.829"></svg:path></svg:defs><svg:g fill="#f4aa41"><svg:use href="#openmojiCroissant0"></svg:use><svg:use href="#openmojiCroissant1"></svg:use><svg:use href="#openmojiCroissant2"></svg:use><svg:use href="#openmojiCroissant3"></svg:use></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:use href="#openmojiCroissant0"></svg:use><svg:use href="#openmojiCroissant1"></svg:use><svg:use href="#openmojiCroissant2"></svg:use><svg:use href="#openmojiCroissant3"></svg:use></svg:g>`,
})
export class OpenmojiCroissantIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
