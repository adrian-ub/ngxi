import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirLongArrowUpLeftSolidIcon],svg[iconoir-long-arrow-up-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M6.22 8.78a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.28.53v7a.75.75 0 0 1-1.28.53z"></svg:path><svg:path d="M9 8.25a.75.75 0 0 1 .75-.75h3a4.75 4.75 0 0 1 4.75 4.75v7a.75.75 0 0 1-1.5 0v-7A3.25 3.25 0 0 0 12.75 9h-3A.75.75 0 0 1 9 8.25"></svg:path></svg:g>`,
})
export class IconoirLongArrowUpLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
