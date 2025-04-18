import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCalendarSlashThinIcon],svg[ph-calendar-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31A4 4 0 0 0 48 36a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a4 4 0 0 0 3-6.69Zm-4.46 7L82.59 84H44V48a4 4 0 0 1 2.5-3.71ZM48 212a4 4 0 0 1-4-4V92h45.87L199 212ZM220 48v129.23a4 4 0 1 1-8 0V92h-77.12a4 4 0 0 1 0-8H212V48a4 4 0 0 0-4-4h-28v12a4 4 0 0 1-8 0V44H91.25a4 4 0 0 1 0-8H172V24a4 4 0 0 1 8 0v12h28a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCalendarSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
