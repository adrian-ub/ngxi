import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinGradleIcon],svg[catppuccin-gradle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#7dc4e4" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m7.5 7.5l-1.97.78c-.2.15-.74.33-1.2-.2a7.3 7.3 0 0 1-1-1.63"></svg:path><svg:path d="M11.43 2.98c.54-.48 4.07-1.39 4.07 2.1c0 2.34-1.6 3.53-2.76 4.5c-.75.61-1.35 1.28-1.35 3.92H9.88c0-1.29-2.66-2.32-3.17 0H5.38c0-1.29-2.65-2.32-3.16 0H.7C.29 11.92.22 8.3 3.33 6.45c-.15-.25-.27-1.02.43-1.3c.87-.34 3.77-1.34 6.51.12s5.01 1.12 5.14.74"></svg:path></svg:g>`,
})
export class CatppuccinGradleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
