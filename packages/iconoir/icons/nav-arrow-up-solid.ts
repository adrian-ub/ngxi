import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirNavArrowUpSolidIcon],svg[iconoir-nav-arrow-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.307 15.287A.75.75 0 0 0 6 15.75h12a.75.75 0 0 0 .53-1.28l-6-6a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 0 0-.163.817" clip-rule="evenodd"></svg:path>`,
})
export class IconoirNavArrowUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
