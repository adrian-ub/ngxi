import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons585Icon],svg[arcticons-585-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.913 24a3.05 3.05 0 0 0-3.049 3.049h0a3.05 3.05 0 0 0 3.05 3.049h1.981a3.05 3.05 0 0 0 3.05-3.05h0A3.05 3.05 0 0 0 24.894 24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.895 24a3.05 3.05 0 0 0 3.05-3.049h0a3.05 3.05 0 0 0-3.05-3.049h-1.982a3.05 3.05 0 0 0-3.049 3.05h0A3.05 3.05 0 0 0 22.915 24m-.002 0h1.982M9.5 29.07c.842.704 1.659 1.028 3.7 1.028h.35a3.42 3.42 0 0 0 3.42-3.42h0a3.42 3.42 0 0 0-3.42-3.418H9.5v-5.358h7.47M31.03 29.07c.842.704 1.659 1.028 3.7 1.028h.351a3.42 3.42 0 0 0 3.419-3.42h0a3.42 3.42 0 0 0-3.419-3.418h-4.05v-5.358H38.5"></svg:path>`,
})
export class Arcticons585Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
