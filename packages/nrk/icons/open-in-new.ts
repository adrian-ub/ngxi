import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkOpenInNewIcon],svg[nrk-open-in-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 19H5V5h4V3H3v18h18v-6h-2zm0-12.586V11h2V3h-8v2h4.586l-10 10h2.828z" clip-rule="evenodd"></svg:path>`,
})
export class NrkOpenInNewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
