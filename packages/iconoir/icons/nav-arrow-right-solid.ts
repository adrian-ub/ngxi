import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirNavArrowRightSolidIcon],svg[iconoir-nav-arrow-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.713 18.693A.75.75 0 0 1 8.25 18V6a.75.75 0 0 1 1.28-.53l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-.817.163" clip-rule="evenodd"></svg:path>`,
})
export class IconoirNavArrowRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
