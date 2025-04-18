import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkStarIcon],svg[nrk-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.162 1L8.888 8H1.37L.885 9.493l6.082 4.419l-2.405 7.4l1.14.826l6.294-4.573l6.298 4.577l1.136-.825l-2.406-7.405l6.09-4.424L22.63 8h-7.527L12.83 1zm.834 3.907L13.65 10h5.356l-4.333 3.148l1.655 5.093l-4.332-3.148l-4.333 3.148l1.655-5.093L4.985 10h5.356z" clip-rule="evenodd"></svg:path>`,
})
export class NrkStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
