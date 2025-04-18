import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMagicWandIcon],svg[openmoji-magic-wand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="m46.684 24.074l6.956-6.928l1.168 1.25l-6.819 6.738zM16.617 54.208l6.955-6.928l1.168 1.249l-6.819 6.739z"></svg:path><svg:path fill="#3f3f3f" d="m46.423 23.785l1.553 1.618L25.435 48.36l-1.727-1.575z"></svg:path><svg:circle cx="47.575" cy="10.958" r="2" fill="#fcea2b"></svg:circle><svg:circle cx="56" cy="28.31" r="2" fill="#fcea2b"></svg:circle><svg:g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"><svg:rect width="53.525" height="3.385" x="9.193" y="34.347" rx=".44" ry=".44" transform="rotate(-45.07 35.956 36.04)"></svg:rect><svg:path d="m45.881 24.448l1.754 1.637M23.441 46.194l2.397 2.39"></svg:path><svg:path stroke-linecap="round" d="M47.575 8.958V7.293m0 7.331v-1.666m-2-2H43.91m7.33 0h-1.665M56 26.31v-1.665m0 7.331V30.31m-2-2h-1.665m7.33 0H58"></svg:path></svg:g>`,
})
export class OpenmojiMagicWandIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
