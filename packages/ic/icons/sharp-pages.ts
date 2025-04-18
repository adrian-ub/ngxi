import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPagesIcon],svg[ic-sharp-pages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v8h5L7 7l4 1V3zm5 10H3v8h8v-5l-4 1zm9 4l-4-1v5h8v-8h-5zm4-14h-8v5l4-1l-1 4h5z"></svg:path>`,
})
export class IcSharpPagesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
