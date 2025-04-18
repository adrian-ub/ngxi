import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDentalBracesIcon],svg[hugeicons-dental-braces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 6c.5.5 1.503.412 3-.824m0 0q-.332-.272-.689-.626c-2.306-2.284-5.446-1.837-6.917 0C3.378 5.82.778 8.98 7.142 20.24c.264.466.789.76 1.354.76c.902 0 1.607-.72 1.636-1.56c.063-1.782.408-3.837 1.868-3.837s1.806 2.055 1.868 3.837c.029.84.734 1.56 1.636 1.56c.565 0 1.09-.294 1.354-.76c6.365-11.261 3.764-14.42 2.748-15.69c-1.471-1.837-4.611-2.284-6.917 0q-.357.353-.689.626"></svg:path><svg:path d="M10.387 9.387c-.516.516-.516 2.71 0 3.226s2.71.516 3.226 0s.516-2.71 0-3.226s-2.71-.516-3.226 0M10 11H4m16 0h-6"></svg:path></svg:g>`,
})
export class HugeiconsDentalBracesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
