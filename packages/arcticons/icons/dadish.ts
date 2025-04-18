import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDadishIcon],svg[arcticons-dadish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24.093" cy="24.191" r="15.226" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.63 9.013c-1.592-4.226-4.002-6.94-7.048-5.72c-2.674 1.064-1.327 4.354-1.327 4.354S9.482 5.85 8.74 10.536c-.448 2.82 1.699 3.797 3.465 4.119m2.811 21.834C21.38 42.658 20.15 45 20.15 45s11.127-5.846 14.055-9.37"></svg:path><svg:ellipse cx="24.491" cy="20.803" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.435" ry="2.606" transform="rotate(-5.026 24.49 20.803)"></svg:ellipse><svg:ellipse cx="35.783" cy="20.766" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.16" ry="2.596" transform="rotate(-9.616 35.783 20.766)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.607 22.336s1.943.344 3.065.326c1.123-.017 2.538-.508 2.538-.508s.362 3.553-2.606 3.62c-2.967.069-2.997-3.445-2.997-3.445z"></svg:path>`,
})
export class ArcticonsDadishIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
