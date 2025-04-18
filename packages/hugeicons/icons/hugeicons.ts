import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHugeiconsIcon],svg[hugeicons-hugeicons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.992 9.063h-2.26c-.14-3.88-3.55-7-7.74-7s-7.59 3.12-7.74 7h-2.26c-.41 0-.75.34-.75.75s.34.75.75.75h.84l.65 5.25c.39 3.08.58 4.63 1.78 5.68c1.21 1.07 2.78 1.07 5.91 1.07h1.64c3.12 0 4.69 0 5.91-1.07c1.2-1.05 1.39-2.6 1.79-5.72l.65-5.21h.84c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zm-10-5.5c3.35 0 6.09 2.45 6.24 5.5H5.752c.14-3.05 2.88-5.5 6.24-5.5m7.02 12.06c-.34 2.71-.51 4.06-1.29 4.74c-.79.69-2.17.69-4.92.69h-1.64c-2.75 0-4.13 0-4.92-.69c-.77-.68-.94-2.04-1.29-4.78l-.63-5.03h15.3l-.63 5.06z" color="currentColor"></svg:path>`,
})
export class HugeiconsHugeiconsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
