import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpAmpStoriesIcon],svg[ic-sharp-amp-stories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4h10v15H7zM3 6h2v11H3zm16 0h2v11h-2z"></svg:path>`,
})
export class IcSharpAmpStoriesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
