import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarAlarmPauseBoldDuotoneIcon],svg[solar-alarm-pause-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a9 9 0 1 0 0-18a9 9 0 0 0 0 18" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11 15.5v-5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C10.199 9 9.966 9 9.5 9s-.699 0-.883.076a1 1 0 0 0-.54.541C8 9.801 8 10.034 8 10.5v5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883m5 0v-5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C15.199 9 14.966 9 14.5 9s-.699 0-.883.076a1 1 0 0 0-.54.541C13 9.801 13 10.034 13 10.5v5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.24 2.34a.72.72 0 0 1-.232.996l-3.891 2.41a.734.734 0 0 1-1.006-.23a.72.72 0 0 1 .232-.996l3.892-2.41a.734.734 0 0 1 1.006.23m7.519 0a.734.734 0 0 1 1.005-.23l3.892 2.41a.72.72 0 0 1 .232.996a.734.734 0 0 1-1.006.23l-3.891-2.41a.72.72 0 0 1-.233-.996" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlarmPauseBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
