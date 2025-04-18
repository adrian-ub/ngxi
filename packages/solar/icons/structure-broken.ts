import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarStructureBrokenIcon],svg[solar-structure-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M8 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm14 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0ZM8 19a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm14 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:path stroke-linecap="round" d="M8 5h8m3 11v-3m0-5v1m-3 10h-3m-3 0H8m-3-3V8"></svg:path></svg:g>`,
})
export class SolarStructureBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
