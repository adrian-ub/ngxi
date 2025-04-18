import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsPlusIcon],svg[dashicons-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7v3h-5v5H9v-5H4V7h5V2h3v5z"></svg:path>`,
})
export class DashiconsPlusIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
