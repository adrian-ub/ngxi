import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8MonitorIcon],svg[icons8-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v18h13v2h-5v2h12v-2h-5v-2h13V6zm2 2h24v14H4z"></svg:path>`,
})
export class Icons8MonitorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
