import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSwitchbotIcon],svg[arcticons-switchbot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.284 42.239s21.614 4.755 24.482-4.201c3.492-10.903-19.298-17.185-15.769-28.075c2.762-8.518 22.72-4.53 22.72-4.53"></svg:path>`,
})
export class ArcticonsSwitchbotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
