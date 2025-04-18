import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowLeftTagSolidIcon],svg[iconoir-arrow-left-tag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 4.25A4.75 4.75 0 0 1 22.75 9v6A4.75 4.75 0 0 1 18 19.75H6A4.75 4.75 0 0 1 1.25 15V9A4.75 4.75 0 0 1 6 4.25zM8.97 15.28l-2.75-2.75a.75.75 0 0 1 0-1.06l2.75-2.75a.75.75 0 1 1 1.06 1.06l-1.47 1.47h8.19a.75.75 0 0 1 0 1.5H8.56l1.47 1.47a.75.75 0 1 1-1.06 1.06" clip-rule="evenodd"></svg:path>`,
})
export class IconoirArrowLeftTagSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
