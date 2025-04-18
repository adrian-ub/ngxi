import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMaterialsLightIcon],svg[lets-icons-materials-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path d="m3 7l7-4l11 4M3 7v5l11 4l7-4V7M3 7l11 4l7-4"></svg:path><svg:path d="M3 12v5l11 4l7-4v-5"></svg:path></svg:g>`,
})
export class LetsIconsMaterialsLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
