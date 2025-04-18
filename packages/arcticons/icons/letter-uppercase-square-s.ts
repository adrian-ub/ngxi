import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLetterUppercaseSquareSIcon],svg[arcticons-letter-uppercase-square-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.017 30.247C19.998 31.524 21.228 32 22.94 32h2.369a3.99 3.99 0 0 0 3.991-3.991v-.018A3.99 3.99 0 0 0 25.31 24h-2.613a3.996 3.996 0 0 1-3.996-3.996h0A4.004 4.004 0 0 1 22.704 16h2.356c1.712 0 2.942.476 3.923 1.753"></svg:path>`,
})
export class ArcticonsLetterUppercaseSquareSIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
