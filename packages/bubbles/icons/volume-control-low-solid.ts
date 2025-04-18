import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesVolumeControlLowSolidIcon],svg[bubbles-volume-control-low-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.2 1.527L5.245 5.48a.17.17 0 0 1-.118.048h-1.46a1.333 1.333 0 0 0-1.334 1.334v2.276a1.333 1.333 0 0 0 1.334 1.333h1.46a.17.17 0 0 1 .118.05l3.951 3.95a.666.666 0 0 0 1.137-.47V2A.667.667 0 0 0 9.2 1.527M12.426 5a.667.667 0 0 0-.944.942a2.92 2.92 0 0 1 0 4.12a.667.667 0 1 0 .943.938a4.255 4.255 0 0 0 .001-6"></svg:path>`,
})
export class BubblesVolumeControlLowSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
