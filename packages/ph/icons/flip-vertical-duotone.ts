import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFlipVerticalDuotoneIcon],svg[ph-flip-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m219.11 159.37l-160 64A8 8 0 0 1 48 216v-64a8 8 0 0 1 8-8h160c8.71 0 11.14 12 3.11 15.37" opacity=".2"></svg:path><svg:path d="M56 120h160a16 16 0 0 0 6.23-30.74l-.14-.06l-159.93-64A16 16 0 0 0 40 40v64a16 16 0 0 0 16 16m0-80l.15.06L216 104H56zm160 96H56a16 16 0 0 0-16 16v64a16 16 0 0 0 22.15 14.78l159.93-64l.14-.06A16 16 0 0 0 216 136M56.15 215.93L56 216v-64h160Z"></svg:path></svg:g>`,
})
export class PhFlipVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
