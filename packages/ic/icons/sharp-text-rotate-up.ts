import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpTextRotateUpIcon],svg[ic-sharp-text-rotate-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 4l-3 3h2v13h2V7h2zm-6.2 11.5v-5l2.2-.9V7.5L3 12.25v1.5l11 4.75v-2.1zM4.98 13L10 11.13v3.74z"></svg:path>`,
})
export class IcSharpTextRotateUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
