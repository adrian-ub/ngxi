import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPageviewIcon],svg[ic-sharp-pageview-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 9a2.5 2.5 0 0 0 0 5a2.5 2.5 0 0 0 0-5M22 4H2v16h20zm-5.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7S16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9z"></svg:path>`,
})
export class IcSharpPageviewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
