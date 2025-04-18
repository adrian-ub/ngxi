import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTxtReferenceIcon],svg[carbon-txt-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zM21 4h3v12h2V4h3V2h-8zm-1-2h-2l-2 6l-2-6h-2l2.752 7L12 16h2l2-6l2 6h2l-2.755-7zM3 4h3v12h2V4h3V2H3z"></svg:path>`,
})
export class CarbonTxtReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
