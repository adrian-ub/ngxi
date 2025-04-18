import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirLongArrowLeftUpSolidIcon],svg[iconoir-long-arrow-left-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M8.53 6.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 .53 1.28h7a.75.75 0 0 0 .53-1.28z"></svg:path><svg:path d="M8 9.25a.75.75 0 0 0-.75.75v3A4.75 4.75 0 0 0 12 17.75h7a.75.75 0 0 0 0-1.5h-7A3.25 3.25 0 0 1 8.75 13v-3A.75.75 0 0 0 8 9.25"></svg:path></svg:g>`,
})
export class IconoirLongArrowLeftUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
