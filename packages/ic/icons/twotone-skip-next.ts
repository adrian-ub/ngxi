import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneSkipNextIcon],svg[ic-twotone-skip-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 9.86v4.28L11.03 12z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M14.5 12L6 6v12zM8 9.86L11.03 12L8 14.14zM16 6h2v12h-2z"></svg:path>`,
})
export class IcTwotoneSkipNextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
