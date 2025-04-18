import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fadXlrplugIcon],svg[fad-xlrplug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M128 220c-50.81 0-92-41.19-92-92c0-34.045 18.492-63.77 45.98-79.68c26.471 0 69.646.367 92.67.367C201.79 64.685 220 94.216 220 128c0 50.81-41.19 92-92 92m0-15c42.526 0 77-34.474 77-77c0-26.467-13.353-49.815-33.69-63.675c-21.734 0-65.127-.18-86.353-.18C64.47 77.98 51 101.418 51 128c0 42.526 34.474 77 77 77"></svg:path><svg:circle cx="128" cy="176" r="16"></svg:circle><svg:circle cx="176" cy="134" r="16"></svg:circle><svg:circle cx="80" cy="135" r="16"></svg:circle></svg:g>`,
})
export class FadXlrplugIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
