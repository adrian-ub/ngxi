import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceWearGlovesIcon],svg[guidance-wear-gloves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5 15.5v-3a3 3 0 0 0-3-3h-.5V20A3.5 3.5 0 0 1 5 23.5h4M12 2V.5h-.5a3 3 0 0 0-3 3v4m.17-5H8a3 3 0 0 0-3 3V16m10.5-4V3.5a3 3 0 0 1 3-3h.5V12V5.5a3 3 0 0 1 3-3h.5v21H12A3.5 3.5 0 0 0 8.5 20V9.5H9a3 3 0 0 1 3 3v3m3.67-13H15a3 3 0 0 0-3 3m0 0V12m0-6.5V16"></svg:path>`,
})
export class GuidanceWearGlovesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
