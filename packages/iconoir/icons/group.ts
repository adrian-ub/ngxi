import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirGroupIcon],svg[iconoir-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M1 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1"></svg:path><svg:path d="M13 14v0a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v.5"></svg:path><svg:path stroke-linejoin="round" d="M8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8m10-3a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path></svg:g>`,
})
export class IconoirGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
