import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSquareCircleIcon],svg[hugeicons-square-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M7.292 11.209c.664-.035 1.208 0 1.468.611c.3.705 1.14 2.94 1.32 3.42c.207.554.54.84 1.544.756"></svg:path><svg:path d="M11.912 11.208c-1.08-.06-2.014 1.655-2.448 2.412c-.54.84-1.424 2.4-2.46 2.376M17.5 11h-3s2.005-1.32 2.224-1.47c.22-.151.776-.476.776-1.202C17.5 7.603 16.775 7 16.007 7c-.767 0-1.507.535-1.507 1.336"></svg:path></svg:g>`,
})
export class HugeiconsSquareCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
