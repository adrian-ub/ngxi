import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiBathtubIcon],svg[arcticons-emoji-bathtub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 23.967v6.979c0 5.117 3.996 9.304 8.88 9.304h19.24c4.884 0 8.88-4.187 8.88-9.304v-6.979s-17.02 1.551-37 0m35.269 0V9.271s0-5.14-4.81-1.11"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.517 9.23c1.192-1.557 3.18-2.035 4.441-1.069c1.262.967 1.319 3.011.128 4.567zM5.5 23.967v6.979c0 5.117 3.996 9.304 8.88 9.304h19.24c4.884 0 8.88-4.187 8.88-9.304v-6.979s-17.02 1.551-37 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.951 38.769l.846 2.613H37.19l-.494-1.52M9.59 38.769l-.846 2.613h2.608l.493-1.52"></svg:path>`,
})
export class ArcticonsEmojiBathtubIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
