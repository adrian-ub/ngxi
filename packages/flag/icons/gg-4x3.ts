import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagGg4x3Icon],svg[flag-gg-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M0 0h640v480H0z"></svg:path><svg:path fill="#e8112d" d="M256 0h128v480H256z"></svg:path><svg:path fill="#e8112d" d="M0 176h640v128H0z"></svg:path><svg:path id="flagGg4x30" fill="#f9dd16" d="m110 286.7l23.3-23.4h210v-46.6h-210L110 193.3z"></svg:path><svg:use width="36" height="24" href="#flagGg4x30" transform="rotate(90 320 240)"></svg:use><svg:use width="36" height="24" href="#flagGg4x30" transform="rotate(-90 320 240)"></svg:use><svg:use width="36" height="24" href="#flagGg4x30" transform="rotate(180 320 240)"></svg:use>`,
})
export class FlagGg4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
