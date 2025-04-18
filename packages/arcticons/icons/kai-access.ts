import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKaiAccessIcon],svg[arcticons-kai-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.726 24.409l7.632-.157l3.83 13.788h-8.214l-1.908-8.002m-7.326-1.996l4.01-9.402h.606l1.48 6.21"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 14.03L6.563 33.37l9.187-20.76c.916-2.07 2.513-2.65 4.58-2.65h6.06l3.159 11.375m-5.483 8.706L12.411 38.04H4.5h0l39-20.917"></svg:path>`,
})
export class ArcticonsKaiAccessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
