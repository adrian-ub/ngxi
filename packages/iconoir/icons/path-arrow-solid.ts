import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPathArrowSolidIcon],svg[iconoir-path-arrow-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M17.47 2.47a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1-.53 1.28h-2.75v9.25a.75.75 0 0 1-1.5 0V7.25H14.5a.75.75 0 0 1-.53-1.28z"></svg:path><svg:path d="M3.25 7.5a4.25 4.25 0 0 1 8.5 0v9a2.75 2.75 0 1 0 5.5 0a.75.75 0 0 1 1.5 0a4.25 4.25 0 0 1-8.5 0v-9a2.75 2.75 0 1 0-5.5 0v12a.75.75 0 0 1-1.5 0z"></svg:path></svg:g>`,
})
export class IconoirPathArrowSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
