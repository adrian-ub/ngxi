import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinPhpIcon],svg[catppuccin-php-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round" d="M.5 12.5v.74c0 .76.774 1.26 1.5 1.26c.938 0 1.5-.5 1.5-1.255V6c0-1.715 1.494-3.478 3.65-3.501c2.344 0 3.85 1.558 3.85 3c.166 2.99-1.422 4.137-3.504 5v4h8.002V9c.041-.635-.56-1.844-1.367-2.5c-.937-.692-2.073-.997-3.131-1m.5 9v-3M6 6.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path>`,
})
export class CatppuccinPhpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
