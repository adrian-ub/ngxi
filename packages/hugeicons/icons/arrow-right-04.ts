import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowRight04Icon],svg[hugeicons-arrow-right-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 12H4m14.586 1.603l-.967.76c-1.565 1.234-2.348 1.851-2.984 1.57C14 15.652 14 14.688 14 12.76v-1.52c0-1.927 0-2.89.635-3.172c.636-.281 1.419.336 2.984 1.57l.967.76C19.529 11.14 20 11.511 20 12s-.471.86-1.414 1.603" color="currentColor"></svg:path>`,
})
export class HugeiconsArrowRight04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
