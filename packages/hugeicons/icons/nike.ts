import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNikeIcon],svg[hugeicons-nike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.503 16.267C-.781 19.742 1.808 9.896 5.433 7c-.978 2.667-1.453 7.008 5.067 4.5L22 7s-5.279 5.4-14.497 9.267" color="currentColor"></svg:path>`,
})
export class HugeiconsNikeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
