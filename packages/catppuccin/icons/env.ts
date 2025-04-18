import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinEnvIcon],svg[catppuccin-env-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#eed49f" stroke-linecap="round" stroke-linejoin="round" d="M5.5 8.5V12m0-6.5V4m0 4.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m5 3.5v-1.5m0-3V4m0 6.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M4 1.5h8A2.5 2.5 0 0 1 14.5 4v8a2.5 2.5 0 0 1-2.5 2.5H4A2.5 2.5 0 0 1 1.5 12V4A2.5 2.5 0 0 1 4 1.5"></svg:path>`,
})
export class CatppuccinEnvIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
