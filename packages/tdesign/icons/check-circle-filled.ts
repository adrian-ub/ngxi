import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCheckCircleFilledIcon],svg[tdesign-check-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11M7.5 10.586l3 3l6-6L17.914 9L10.5 16.414L6.086 12z"></svg:path>`,
})
export class TdesignCheckCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
