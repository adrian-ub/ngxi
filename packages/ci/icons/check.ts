import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciCheckIcon],svg[ci-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 12l4.243 4.243l8.484-8.486"></svg:path>`,
})
export class CiCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
