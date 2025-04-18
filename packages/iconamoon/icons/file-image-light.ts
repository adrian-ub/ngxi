import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonFileImageLightIcon],svg[iconamoon-file-image-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-linecap="round" stroke-width="1.5" d="M7 21a2 2 0 0 1-2-2V3h9l5 5v11a2 2 0 0 1-2 2z"></svg:path><svg:path stroke-linecap="round" stroke-width="1.5" d="m6 20l6-6l6 6"></svg:path><svg:path stroke-width="2.25" d="M9.5 10.5h.01v.01H9.5z"></svg:path><svg:path stroke-width="1.5" d="M13 3v6h6"></svg:path></svg:g>`,
})
export class IconamoonFileImageLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
