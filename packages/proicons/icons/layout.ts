import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsLayoutIcon],svg[proicons-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 8.75v8a3 3 0 0 0 3 3H10m-7.25-11v-1.5a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v1.5m-18.5 0H10m11.25 0v8a3 3 0 0 1-3 3H10m11.25-11H10m0 0v11"></svg:path>`,
})
export class ProiconsLayoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
