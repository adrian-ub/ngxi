import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feBuildingIcon],svg[fe-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12a2 2 0 0 1 2 2v18H4V4a2 2 0 0 1 2-2m0 18h4v-4h4v4h4V4H6zm7-14h3v3h-3zm-5 5h3v3H8zm5 0h3v3h-3zM8 6h3v3H8z"></svg:path>`,
})
export class FeBuildingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
