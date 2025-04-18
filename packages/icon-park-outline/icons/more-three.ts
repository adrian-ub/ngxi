import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMoreThreeIcon],svg[icon-park-outline-more-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M21.5 14a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0m0 10a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0M24 36.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkOutlineMoreThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
