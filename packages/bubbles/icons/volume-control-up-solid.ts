import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesVolumeControlUpSolidIcon],svg[bubbles-volume-control-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.167 7.165h-1.334A.167.167 0 0 1 13.667 7V5.665a.833.833 0 1 0-1.667 0V7a.167.167 0 0 1-.167.166H10.5a.833.833 0 1 0 0 1.667h1.333A.166.166 0 0 1 12 9v1.333a.834.834 0 0 0 1.667 0V8.999a.167.167 0 0 1 .166-.167h1.334a.833.833 0 0 0 0-1.667M7.529 1.527L3.577 5.48a.17.17 0 0 1-.118.048H1.333A1.333 1.333 0 0 0 0 6.861v2.276a1.333 1.333 0 0 0 1.333 1.333H3.46a.17.17 0 0 1 .118.05l3.951 3.95A.667.667 0 0 0 8.667 14V2a.667.667 0 0 0-1.138-.473"></svg:path>`,
})
export class BubblesVolumeControlUpSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
