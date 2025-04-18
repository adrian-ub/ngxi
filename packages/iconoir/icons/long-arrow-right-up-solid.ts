import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirLongArrowRightUpSolidIcon],svg[iconoir-long-arrow-right-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M14.97 6.47a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1-.53 1.28h-7a.75.75 0 0 1-.53-1.28z"></svg:path><svg:path d="M15.5 9.25a.75.75 0 0 1 .75.75v3a4.75 4.75 0 0 1-4.75 4.75h-7a.75.75 0 0 1 0-1.5h7A3.25 3.25 0 0 0 14.75 13v-3a.75.75 0 0 1 .75-.75"></svg:path></svg:g>`,
})
export class IconoirLongArrowRightUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
