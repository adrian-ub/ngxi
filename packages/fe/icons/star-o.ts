import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feStarOIcon],svg[fe-star-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.282 17.362l3.218-1.685l3.218 1.685l-.615-3.57l2.604-2.527l-3.598-.52L12.5 7.496l-1.609 3.247l-3.598.52l2.604 2.529zm3.218.563L6.629 21l1.121-6.512L3 9.875l6.564-.95L12.5 3l2.936 5.925l6.564.95l-4.75 4.613L18.371 21z"></svg:path>`,
})
export class FeStarOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
