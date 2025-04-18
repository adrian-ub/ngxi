import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAlarmSmokeIcon],svg[tabler-alarm-smoke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 8l-.8 3a1.25 1.25 0 0 1-1.2 1H8a1.25 1.25 0 0 1-1.2-1L6 8M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm9 11c.643.288 1.017.756 1 1.25c.017.494-.357.962-1 1.25s-1.017.756-1 1.25c-.017.494.357.962 1 1.25m-5-5c.643.288 1.017.756 1 1.25c.017.494-.357.962-1 1.25s-1.017.756-1 1.25c-.017.494.357.962 1 1.25m10-5c.643.288 1.017.756 1 1.25c.017.494-.357.962-1 1.25s-1.017.756-1 1.25c-.017.494.357.962 1 1.25"></svg:path>`,
})
export class TablerAlarmSmokeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
