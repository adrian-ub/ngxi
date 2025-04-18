import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAbTestingIcon],svg[pixelarticons-ab-testing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h6v2H5v2h4v2H5v2h4v2H3zm6 8h2V9H9zm0-4h2V5H9zm4 4h8v10h-2v-4h-4v4h-2zm2 4h4v-2h-4zm0-12h6v6h-2V5h-4zM3 15h2v4h4v2H3z"></svg:path>`,
})
export class PixelarticonsAbTestingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
