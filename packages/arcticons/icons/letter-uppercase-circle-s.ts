import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLetterUppercaseCircleSIcon],svg[arcticons-letter-uppercase-circle-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.017 30.247C19.998 31.524 21.228 32 22.94 32h2.369a3.99 3.99 0 0 0 3.991-3.991v-.018A3.99 3.99 0 0 0 25.31 24h-2.613a3.996 3.996 0 0 1-3.996-3.996h0A4.004 4.004 0 0 1 22.704 16h2.356c1.712 0 2.942.476 3.923 1.753"></svg:path>`,
})
export class ArcticonsLetterUppercaseCircleSIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
