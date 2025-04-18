import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAlarmPlusFilledIcon],svg[tabler-alarm-plus-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 6.072a8 8 0 1 1-11.995 7.213L4 13l.005-.285A8 8 0 0 1 16 6.072M12 10a1 1 0 0 0-1 1v1h-1l-.117.007A1 1 0 0 0 10 14h1v1l.007.117A1 1 0 0 0 13 15v-1h1l.117-.007A1 1 0 0 0 14 12h-1v-1l-.007-.117A1 1 0 0 0 12 10"></svg:path><svg:path d="M6.412 3.191A1 1 0 0 1 7.685 4.73l-.097.08l-2.75 2a1 1 0 0 1-1.273-1.54l.097-.08zm9.779.221a1 1 0 0 1 1.291-.288l.106.067l2.75 2a1 1 0 0 1-1.07 1.685l-.106-.067l-2.75-2a1 1 0 0 1-.22-1.397z"></svg:path></svg:g>`,
})
export class TablerAlarmPlusFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
