import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTildeDuotoneIcon],svg[ph-tilde-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M222.23 130.59c-14.51 18-28.84 27.6-43.8 29.17a43 43 0 0 1-4.5.24c-19.3 0-35.39-13.1-51-25.8c-14.91-12.14-29-23.61-43.7-22c-10.51 1.1-21.31 8.72-33 23.28a8 8 0 0 1-12.46-10c14.51-18 28.84-27.6 43.8-29.17c21.32-2.25 38.69 11.89 55.48 25.56c14.91 12.14 29 23.62 43.7 22c10.51-1.1 21.31-8.72 33-23.28a8 8 0 1 1 12.46 10Z"></svg:path></svg:g>`,
})
export class PhTildeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
