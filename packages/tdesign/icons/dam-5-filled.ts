import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDam5FilledIcon],svg[tdesign-dam-5-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v2h-1v16h1v2H2v-2h1V4H2zm3 2v16h2V4zm12 0v16h2V4zm-2 16v-5a3 3 0 1 0-6 0v5z"></svg:path>`,
})
export class TdesignDam5FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
