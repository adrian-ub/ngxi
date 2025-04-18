import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTimerSettingsIcon],svg[mdi-timer-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6.4L20.5 5c-.5-.5-1-1-1.5-1.4L17.6 5C16 3.7 14.1 3 12 3c-5 0-9 4-9 9s4 9 9 9s9-4 9-9c0-2.1-.7-4.1-2-5.6M13 13h-2V6h2zm2-13H9v2h6zm-2 24h-2v-2h2zm4 0h-2v-2h2zm-8 0H7v-2h2z"></svg:path>`,
})
export class MdiTimerSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
