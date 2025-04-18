import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSoilTemperatureGlobalIcon],svg[hugeicons-soil-temperature-global-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.832 18A10 10 0 0 1 14 16m7.998-8C15.656 8 10.3 12.217 8.578 18"></svg:path><svg:path d="M22 4C13.432 4 6.263 9.984 4.444 18M19 22a3 3 0 0 0 2.365-4.846c-.504-.645-.756-.967-.81-1.125s-.055-.366-.055-.781V12.5a1.5 1.5 0 0 0-3 0v2.748c0 .415 0 .622-.055.78c-.054.159-.306.481-.81 1.126A3 3 0 0 0 19 22M2 10c.878 0 1.73.113 2.541.326M2 6c1.866 0 3.647.365 5.275 1.028M2 2c3.175 0 6.159.822 8.749 2.265"></svg:path></svg:g>`,
})
export class HugeiconsSoilTemperatureGlobalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
