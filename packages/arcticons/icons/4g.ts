import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons4gIcon],svg[arcticons-4g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.893 21.242a5.705 5.705 0 0 0-5.681-5.73h-.048h0a5.705 5.705 0 0 0-5.73 5.681v5.778c0 3.183 2.547 5.517 5.73 5.517h0c3.183 0 5.729-2.547 5.729-5.518h-5.73M19.132 32.5v-17l-9.025 11.333h11.125"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class Arcticons4gIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
