import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesShareSocialOutlineIcon],svg[bubbles-share-social-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.5 11.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 0 0-7.5 0M15 6a3.75 3.75 0 1 0 7.5 0A3.75 3.75 0 0 0 15 6m0 12a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 0 0-7.5 0M8.746 9.891l6.508-2.53m-6.649 5.567l6.79 3.395"></svg:path>`,
})
export class BubblesShareSocialOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
