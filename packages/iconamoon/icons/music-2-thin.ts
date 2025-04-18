import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonMusic2ThinIcon],svg[iconamoon-music-2-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:circle cx="6" cy="18" r="3" stroke-linejoin="round"></svg:circle><svg:path stroke-linejoin="round" d="M9 18V5"></svg:path><svg:path d="M21 3L9 5m12 2L9 9"></svg:path><svg:circle cx="18" cy="16" r="3" stroke-linejoin="round"></svg:circle><svg:path stroke-linejoin="round" d="M21 16V3"></svg:path></svg:g>`,
})
export class IconamoonMusic2ThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
