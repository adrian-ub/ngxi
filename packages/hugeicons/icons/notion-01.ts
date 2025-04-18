import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNotion01Icon],svg[hugeicons-notion-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="m8.429 10l5.09 6.396c.197.247.381.48.697.568c.13.036.272.036.555.036c.28 0 .42 0 .527-.055c.291-.148.273-.46.273-.745v-2.771M8.43 10V7m0 3v7m0-10h1.1c.477 0 .715 0 .921.1s.355.287.65.661l4.47 5.668M8.43 7H7m1.429 10H7m1.429 0H10m5.571-10v6.429m0-6.429H14m1.571 0H17"></svg:path></svg:g>`,
})
export class HugeiconsNotion01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
