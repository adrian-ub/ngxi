import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSlIcon],svg[arcticons-sl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 20.29a19.5 19.5 0 0 1-39 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.79 20.29a15.79 15.79 0 0 1-31.58 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.07 20.29a12.07 12.07 0 0 1-24.14 0m24.14 0a12.07 12.07 0 1 0-24.14 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.41 23.26a2.22 2.22 0 0 0 1.85.83h1.12a1.86 1.86 0 0 0 1.86-1.85h0a1.86 1.86 0 0 0-1.86-1.86h-1.21a1.87 1.87 0 0 1-1.86-1.86h0a1.87 1.87 0 0 1 1.86-1.86h1.12a2 2 0 0 1 1.85.84m4.65-.93V24h3.71"></svg:path>`,
})
export class ArcticonsSlIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
