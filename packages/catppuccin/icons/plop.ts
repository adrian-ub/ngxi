import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinPlopIcon],svg[catppuccin-plop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8bd5ca" stroke-linecap="round" stroke-linejoin="round" d="M3.5 10.62c.2 2.6 1.94 4.88 4.54 4.88h.05c2.6 0 4.33-2.29 4.53-4.88l.01-.23h0c0-1.15-.61-2.74-1.8-4.62A391 391 0 0 0 8.31 1.9l-.17-.27l-.05-.07l-.03-.05l-.04.05l-.05.07l-.17.27l-2.5 3.88C4.1 7.66 3.5 9.25 3.5 10.4v.23h0Z"></svg:path>`,
})
export class CatppuccinPlopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
