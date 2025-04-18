import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinEmberIcon],svg[catppuccin-ember-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round" d="M1.5 9.25c6.11 1.18 8.03-.92 8.79-1.7c1.53-1.57 0-4.71-1.91-3.93c-1.91.79-4.59 5.5-2.3 8.63c1.53 2.1 4.34 1.41 8.42-1.75"></svg:path>`,
})
export class CatppuccinEmberIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
