import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagGg1x1Icon],svg[flag-gg-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M0 0h512v512H0z"></svg:path><svg:path fill="#e8112d" d="M192 0h128v512H192z"></svg:path><svg:path fill="#e8112d" d="M0 187.7h512v136.6H0z"></svg:path><svg:path id="flagGg1x10" fill="#f9dd16" d="m46 305.8l23.3-25h210v-49.7h-210L46 206.2z"></svg:path><svg:use width="36" height="24" href="#flagGg1x10" transform="matrix(0 1.06667 -.9375 0 496 -17)"></svg:use><svg:use width="36" height="24" href="#flagGg1x10" transform="matrix(0 -1.06667 .9375 0 16 529)"></svg:use><svg:use width="36" height="24" href="#flagGg1x10" transform="rotate(180 256 256)"></svg:use>`,
})
export class FlagGg1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
