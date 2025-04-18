import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirNavArrowLeftSolidIcon],svg[iconoir-nav-arrow-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.287 18.693A.75.75 0 0 0 15.75 18V6a.75.75 0 0 0-1.28-.53l-6 6a.75.75 0 0 0 0 1.06l6 6a.75.75 0 0 0 .817.163" clip-rule="evenodd"></svg:path>`,
})
export class IconoirNavArrowLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
