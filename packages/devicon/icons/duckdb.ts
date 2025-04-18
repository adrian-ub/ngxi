import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconDuckdbIcon],svg[devicon-duckdb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 128C28.6 128 0 99.4 0 64S28.6 0 64 0s64 28.6 64 64s-28.6 64-64 64"></svg:path><svg:path fill="#fff100" d="M98.2 54.5H85.6v18.9h12.6c5.2 0 9.5-4.3 9.5-9.5s-4.3-9.4-9.5-9.4m-74 9.5c0 14.6 11.9 26.5 26.5 26.5S77.2 78.6 77.2 64S65.3 37.5 50.7 37.5S24.2 49.4 24.2 64" class="st0"></svg:path>`,
})
export class DeviconDuckdbIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
