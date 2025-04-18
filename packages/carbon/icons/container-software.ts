import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonContainerSoftwareIcon],svg[carbon-container-software-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 12h-8V4h8Zm-6-2h4V6h-4Z"></svg:path><svg:path fill="currentColor" d="M17 15V9H9v14h14v-8Zm-6-4h4v4h-4Zm4 10h-4v-4h4Zm6 0h-4v-4h4Z"></svg:path><svg:path fill="currentColor" d="M26 28H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10v2H6v20h20V16h2v10a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonContainerSoftwareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
