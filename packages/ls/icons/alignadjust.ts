import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsAlignadjustIcon],svg[ls-alignadjust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 50h609c15 0 28 13 28 27v41c0 16-13 29-28 29H29c-16 0-29-13-29-29V77c0-15 13-27 29-27m0 166h609c15 0 28 12 28 26v42c0 15-13 28-28 28H29c-16 0-29-13-29-28v-42c0-14 13-26 29-26m0 166h609c15 0 28 12 28 26v42c0 15-13 28-28 28H29c-16 0-29-13-29-28v-42c0-14 13-26 29-26m0 164h609c15 0 28 14 28 28v41c0 16-13 29-28 29H29c-16 0-29-13-29-29v-41c0-15 13-28 29-28"></svg:path>`,
})
export class LsAlignadjustIcon {
  readonly viewBox = input("0 0 666 644")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
