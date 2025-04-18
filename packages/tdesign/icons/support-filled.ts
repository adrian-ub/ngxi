import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSupportFilledIcon],svg[tdesign-support-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.96 3.546L9.615 8.2a4.49 4.49 0 0 1 4.773 0l4.652-4.652a11 11 0 0 0-14.078 0M20.454 4.96L15.8 9.615a4.49 4.49 0 0 1 0 4.772l4.653 4.653a11 11 0 0 0 0-14.078M19.04 20.454L14.387 15.8a4.49 4.49 0 0 1-4.773 0L4.96 20.455a11 11 0 0 0 14.079 0M3.547 19.04L8.2 14.385a4.49 4.49 0 0 1 0-4.772L3.547 4.96a11 11 0 0 0 0 14.078"></svg:path>`,
})
export class TdesignSupportFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
