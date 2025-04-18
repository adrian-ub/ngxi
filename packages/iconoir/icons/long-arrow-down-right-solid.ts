import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirLongArrowDownRightSolidIcon],svg[iconoir-long-arrow-down-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M17.28 15.22a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 0 1-1.28-.53v-7a.75.75 0 0 1 1.28-.53z"></svg:path><svg:path d="M14.5 15.75a.75.75 0 0 1-.75.75h-3A4.75 4.75 0 0 1 6 11.75v-7a.75.75 0 0 1 1.5 0v7A3.25 3.25 0 0 0 10.75 15h3a.75.75 0 0 1 .75.75"></svg:path></svg:g>`,
})
export class IconoirLongArrowDownRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
