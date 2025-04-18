import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationStarIcon],svg[foundation-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M91.532 39.844a2 2 0 0 0-1.888-1.343H61.482l-9.597-27.159a2 2 0 0 0-3.771 0l-9.598 27.159H10.357c-.851 0-1.609.539-1.891 1.343a2 2 0 0 0 .651 2.226l21.986 17.409l-9.84 27.846a2.003 2.003 0 0 0 2.917 2.382l25.818-15.488l25.818 15.488a2.003 2.003 0 0 0 2.918-2.382l-9.84-27.846L90.886 42.07a2 2 0 0 0 .646-2.226"></svg:path>`,
})
export class FoundationStarIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
