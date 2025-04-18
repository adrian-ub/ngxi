import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneLocalBarIcon],svg[ic-twotone-local-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.23 9L12 12.11L14.77 9z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5zM5.66 5h12.69l-1.78 2H7.43zM12 12.11L9.23 9h5.54z"></svg:path>`,
})
export class IcTwotoneLocalBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
