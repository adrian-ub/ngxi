import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBuilding4LineIcon],svg[ri-building-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 20h2v2H1v-2h2V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zm-2 0V4H5v16zM8 11h3v2H8zm0-4h3v2H8zm0 8h3v2H8zm5 0h3v2h-3zm0-4h3v2h-3zm0-4h3v2h-3z"></svg:path>`,
})
export class RiBuilding4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
