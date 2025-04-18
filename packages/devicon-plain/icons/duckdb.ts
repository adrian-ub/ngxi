import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainDuckdbIcon],svg[devicon-plain-duckdb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 0C28.6 0 0 28.6 0 64s28.6 64 64 64s64-28.6 64-64S99.4 0 64 0M50.7 90.5c-14.6 0-26.5-11.9-26.5-26.5s11.9-26.5 26.5-26.5S77.2 49.4 77.2 64S65.3 90.5 50.7 90.5m47.5-17.1H85.6V54.5h12.6c5.2 0 9.5 4.2 9.5 9.4s-4.3 9.5-9.5 9.5"></svg:path>`,
})
export class DeviconPlainDuckdbIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
