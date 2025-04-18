import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCalendarSlashLightIcon],svg[ph-calendar-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36A6 6 0 0 0 48 34a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a6 6 0 0 0 4.44-10Zm-6.18 11l31.81 35H46V48a2.06 2.06 0 0 1 .26-1M48 210a2 2 0 0 1-2-2V94h43l105.44 116ZM222 48v129.23a6 6 0 1 1-12 0V94h-75.12a6 6 0 0 1 0-12H210V48a2 2 0 0 0-2-2h-26v10a6 6 0 0 1-12 0V46H91.25a6 6 0 0 1 0-12H170V24a6 6 0 0 1 12 0v10h26a14 14 0 0 1 14 14"></svg:path>`,
})
export class PhCalendarSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
