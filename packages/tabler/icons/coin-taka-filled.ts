import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCoinTakaFilledIcon],svg[tabler-coin-taka-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-6.211 4.384a2 2 0 0 0-2.683-.895l-.553.277a1 1 0 0 0 .894 1.788L9 8.618L8.999 10H8a1 1 0 0 0-.993.883L7 11a1 1 0 0 0 1 1h.999L9 15a3 3 0 0 0 2.824 2.995L12 18h.5a3.5 3.5 0 0 0 3.5-3.5V14a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1l.007.117a1 1 0 0 0 .876.876l.032.002l-.02.057A1.5 1.5 0 0 1 12.5 16H12a1 1 0 0 1-1-1l-.001-3H15a1 1 0 0 0 .993-.883L16 11a1 1 0 0 0-1-1h-4.001L11 8.618a2 2 0 0 0-.136-.725z"></svg:path>`,
})
export class TablerCoinTakaFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
