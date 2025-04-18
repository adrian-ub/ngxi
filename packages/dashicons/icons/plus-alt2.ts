import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsPlusAlt2Icon],svg[dashicons-plus-alt2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9v2h-6v6H9v-6H3V9h6V3h2v6z"></svg:path>`,
})
export class DashiconsPlusAlt2Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
