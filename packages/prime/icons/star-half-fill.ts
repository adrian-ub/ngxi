import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeStarHalfFillIcon],svg[prime-star-half-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 4a.75.75 0 0 0-1.423-.332L8.902 8.584l-5.42.784a.75.75 0 0 0-.416 1.279l3.918 3.825l-.923 5.402a.75.75 0 0 0 1.088.79l5.2-2.73a.75.75 0 0 0 .401-.664z"></svg:path>`,
})
export class PrimeStarHalfFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
