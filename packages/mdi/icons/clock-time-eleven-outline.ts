import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiClockTimeElevenOutlineIcon],svg[mdi-clock-time-eleven-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m.5 5v6H11L8.5 8.6l1.3-.8L11 10V7z"></svg:path>`,
})
export class MdiClockTimeElevenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
