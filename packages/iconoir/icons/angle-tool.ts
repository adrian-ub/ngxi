import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirAngleToolIcon],svg[iconoir-angle-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M3 21V3h6v12h12v6z"></svg:path><svg:path d="M13 19v2m-4-2v2M3 7h2m-2 4h2m-2 4h2m12 4v2"></svg:path></svg:g>`,
})
export class IconoirAngleToolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
