import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLoopboardIcon],svg[arcticons-loopboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.72 12.5H16A11.5 11.5 0 0 0 4.5 24h0A11.5 11.5 0 0 0 16 35.5h16A11.5 11.5 0 0 0 43.5 24h0A11.5 11.5 0 0 0 32 12.5H21.881"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.701 5.68l-6.82 6.82l6.82 6.82"></svg:path>`,
})
export class ArcticonsLoopboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
