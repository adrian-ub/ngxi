import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsPercentBadgeSolidIcon],svg[heroicons-percent-badge-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.99 2.243a4.5 4.5 0 0 0-3.398 1.55a4.5 4.5 0 0 0-3.497 1.306a4.5 4.5 0 0 0-1.307 3.498a4.5 4.5 0 0 0-1.548 3.397c0 1.357.6 2.573 1.548 3.397a4.5 4.5 0 0 0 1.307 3.498a4.5 4.5 0 0 0 3.498 1.307a4.5 4.5 0 0 0 3.397 1.549a4.5 4.5 0 0 0 3.397-1.549a4.5 4.5 0 0 0 3.497-1.307a4.5 4.5 0 0 0 1.306-3.497a4.5 4.5 0 0 0 1.55-3.398a4.5 4.5 0 0 0-1.549-3.397a4.5 4.5 0 0 0-1.307-3.498a4.5 4.5 0 0 0-3.498-1.307a4.5 4.5 0 0 0-3.396-1.549m3.53 7.28a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06zm-5.78-.905a1.125 1.125 0 1 0 0 2.25a1.125 1.125 0 0 0 0-2.25m4.5 4.5a1.125 1.125 0 1 0 0 2.25a1.125 1.125 0 0 0 0-2.25" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsPercentBadgeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
