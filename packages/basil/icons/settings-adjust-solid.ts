import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilSettingsAdjustSolidIcon],svg[basil-settings-adjust-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.878 8.75H4a.75.75 0 0 1 0-1.5h9.878a2.251 2.251 0 0 1 4.244 0H20a.75.75 0 0 1 0 1.5h-1.878a2.251 2.251 0 0 1-4.244 0m6.122 8a.75.75 0 0 0 0-1.5h-9.878a2.251 2.251 0 0 0-4.244 0H4a.75.75 0 0 0 0 1.5h1.878a2.25 2.25 0 0 0 4.244 0z"></svg:path>`,
})
export class BasilSettingsAdjustSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
