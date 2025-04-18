import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSmileyWinkFillIcon],svg[ph-smiley-wink-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M92 96a12 12 0 1 1-12 12a12 12 0 0 1 12-12m82.92 60c-10.29 17.79-27.39 28-46.92 28s-36.63-10.2-46.92-28a8 8 0 1 1 13.84-8c7.47 12.91 19.21 20 33.08 20s25.61-7.1 33.08-20a8 8 0 1 1 13.84 8m9.08-40h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhSmileyWinkFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
