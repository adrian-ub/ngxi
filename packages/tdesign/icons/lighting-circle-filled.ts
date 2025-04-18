import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLightingCircleFilledIcon],svg[tdesign-lighting-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-5.71-1.5H13V4.429L6.71 13.5H11v6.071z"></svg:path>`,
})
export class TdesignLightingCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
