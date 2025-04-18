import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStarOffIcon],svg[hugeicons-star-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18.504 14.5l2.644-2.607c1.468-1.472.989-2.964-1.049-3.307l-3.186-.535c-.54-.09-1.179-.564-1.418-1.058l-1.758-3.549c-.95-1.925-2.507-1.925-3.466 0L9.5 5M7.296 8q-.105.034-.204.051L3.9 8.586c-2.041.343-2.511 1.835-1.05 3.307l2.48 2.5c.421.423.651 1.24.521 1.825l-.71 3.095c-.56 2.44.74 3.397 2.882 2.117l2.991-1.785c.55-.322 1.441-.322 1.982 0l2.991 1.785c2.152 1.28 3.443.332 2.882-2.117L18.797 19M2 2l20 20" color="currentColor"></svg:path>`,
})
export class HugeiconsStarOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
