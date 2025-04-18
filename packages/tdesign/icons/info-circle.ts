import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignInfoCircleIcon],svg[tdesign-info-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-12 5.5V10h2v7.5zm2-9h-2.004V6.496H13z"></svg:path>`,
})
export class TdesignInfoCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
