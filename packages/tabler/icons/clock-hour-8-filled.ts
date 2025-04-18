import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClockHour8FilledIcon],svg[tabler-clock-hour-8-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M12 6a1 1 0 0 0-1 1v4.464l-2.555 1.704a1 1 0 0 0-.336 1.286l.059.1a1 1 0 0 0 1.387.278l3.027-2.018l.087-.07l.074-.075l.075-.094l.052-.08l.035-.07l.051-.132l.031-.135l.01-.082L13 12V7a1 1 0 0 0-1-1"></svg:path>`,
})
export class TablerClockHour8FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
