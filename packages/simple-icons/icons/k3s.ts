import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsK3sIcon],svg[simple-icons-k3s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.46 2.172H2.54A2.55 2.55 0 0 0 0 4.712v14.575a2.55 2.55 0 0 0 2.54 2.54h18.92a2.55 2.55 0 0 0 2.54-2.54V4.713a2.55 2.55 0 0 0-2.54-2.54ZM10.14 16.465L5.524 19.15a1.235 1.235 0 1 1-1.242-2.137L8.9 14.33a1.235 1.235 0 1 1 1.241 2.136zm1.817-4.088h-.006a1.235 1.235 0 0 1-1.23-1.24l.023-5.32a1.236 1.236 0 0 1 1.236-1.23h.005a1.235 1.235 0 0 1 1.23 1.241l-.023 5.32a1.236 1.236 0 0 1-1.235 1.23zm8.17 6.32a1.235 1.235 0 0 1-1.688.453l-4.624-2.67a1.235 1.235 0 1 1 1.235-2.14l4.624 2.67a1.235 1.235 0 0 1 .452 1.688z"></svg:path>`,
})
export class SimpleIconsK3sIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
