import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTowerClockIcon],svg[tdesign-tower-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .932l5.288 1.983l-.703 1.873l-.585-.22V5h3v12h-2v6H7v-6H5V5h3v-.432l-.585.22l-.702-1.873zm-2 2.886V5h4V3.818l-2-.75zM9 17v4h6v-4h-2v3h-2v-3zm8-2V7H7v8zm-5-5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0"></svg:path>`,
})
export class TdesignTowerClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
