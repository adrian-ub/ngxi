import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpIosShareIcon],svg[ic-sharp-ios-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8h-5v2h3v11H6V10h3V8H4v15h16z"></svg:path><svg:path fill="currentColor" d="M11 16h2V5h3l-4-4l-4 4h3z"></svg:path>`,
})
export class IcSharpIosShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
