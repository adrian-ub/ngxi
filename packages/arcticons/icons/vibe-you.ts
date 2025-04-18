import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVibeYouIcon],svg[arcticons-vibe-you-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.07 30.666s2.996-5.071 2.47-8.378C31.965 18.658 25 13.353 25 11.83c-.028-.848.03-1.691 0-2.54v22.523"></svg:path><svg:ellipse cx="20.184" cy="32.885" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.097" ry="3.598" transform="rotate(-27.452 20.184 32.885)"></svg:ellipse>`,
})
export class ArcticonsVibeYouIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
