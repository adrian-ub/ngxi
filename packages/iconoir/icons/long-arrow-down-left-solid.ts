import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirLongArrowDownLeftSolidIcon],svg[iconoir-long-arrow-down-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M6.22 15.22a.75.75 0 0 0 0 1.06l3.5 3.5a.75.75 0 0 0 1.28-.53v-7a.75.75 0 0 0-1.28-.53z"></svg:path><svg:path d="M9 15.75c0 .414.336.75.75.75h3a4.75 4.75 0 0 0 4.75-4.75v-7a.75.75 0 0 0-1.5 0v7A3.25 3.25 0 0 1 12.75 15h-3a.75.75 0 0 0-.75.75"></svg:path></svg:g>`,
})
export class IconoirLongArrowDownLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
