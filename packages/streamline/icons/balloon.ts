import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBalloonIcon],svg[streamline-balloon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.021 11.27c.205 2.682 2.541 2.356 3.553 1.706c1.712-1.1 2.846-1.385 4.864-1.226M9.04 4.404c0-1.975-1.8-3.779-4.02-3.779S1.002 2.429 1.002 4.404s1.8 4.152 4.018 4.152c2.22 0 4.019-2.178 4.019-4.152Z"></svg:path><svg:path d="m5.048 8.556l-1.25 1.512a.5.5 0 0 0 .386.819h1.693a.5.5 0 0 0 .39-.813z"></svg:path></svg:g>`,
})
export class StreamlineBalloonIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
