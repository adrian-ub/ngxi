import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleSnowboardDuotoneIcon],svg[ph-person-simple-snowboard-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M144 52a20 20 0 1 1 20 20a20 20 0 0 1-20-20m51.56 138.33L38.12 144.7A17.25 17.25 0 0 0 16 161.18a17.19 17.19 0 0 0 12.44 16.49l157.44 45.63a17.18 17.18 0 1 0 9.68-33Z" opacity=".2"></svg:path><svg:path d="M164 80a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-40a12 12 0 1 1-12 12a12 12 0 0 1 12-12m54.25 72.32l-136-40a8 8 0 1 0-4.52 15.35l40.85 12L85.07 150l-44.73-13a25.18 25.18 0 1 0-14.13 48.34L183.65 231a26 26 0 0 0 7.14 1a25.17 25.17 0 0 0 7-49.36l-50.89-14.75l19.75-29.44a8 8 0 0 0-4.42-12.14l-35.33-10.23l7.78-11.67l79.07 23.26a8 8 0 0 0 4.51-15.35ZM200 206.81a9.07 9.07 0 0 1-3.67 7.3a9.27 9.27 0 0 1-8.22 1.5L30.67 170a9.24 9.24 0 0 1-6.67-8.8a9.06 9.06 0 0 1 3.66-7.3a9.26 9.26 0 0 1 8.23-1.5L193.33 198a9.23 9.23 0 0 1 6.67 8.81m-52.75-68.18l-16.49 24.59l-29.58-8.58l16.4-24.6Z"></svg:path></svg:g>`,
})
export class PhPersonSimpleSnowboardDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
