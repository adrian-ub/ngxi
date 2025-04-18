import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignInfoCircleFilledIcon],svg[tdesign-info-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11M10.996 8.5V6.496H13V8.5zM13 10v7.5h-2V10z"></svg:path>`,
})
export class TdesignInfoCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
