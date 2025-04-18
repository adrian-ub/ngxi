import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSunriseFilledIcon],svg[tabler-sunrise-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 16a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm8-4a5 5 0 0 1 5 5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1a5 5 0 0 1 5-5m9 4a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2zM6.307 9.893l.7.7a1 1 0 0 1-1.414 1.414l-.7-.7a1 1 0 0 1 1.414-1.414m12.8 0a1 1 0 0 1 0 1.414l-.7.7a1 1 0 0 1-1.414-1.414l.7-.7a1 1 0 0 1 1.414 0m-6.4-7.6l3 3a1 1 0 1 1-1.414 1.414L13 5.415V9a1 1 0 0 1-.883.993L12 10a1 1 0 0 1-1-1V5.414L9.707 6.707a1 1 0 0 1-1.414-1.414l2.958-2.96a1 1 0 0 1 .15-.135l.127-.08l.068-.033l.11-.041l.12-.029c.3-.055.627.024.881.278M3 20h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2"></svg:path><svg:path d="M12 12a5 5 0 0 1 4.583 7.002H7.417A5 5 0 0 1 12 12"></svg:path></svg:g>`,
})
export class TablerSunriseFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
