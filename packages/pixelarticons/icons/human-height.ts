import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsHumanHeightIcon],svg[pixelarticons-human-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h4v4H6zM3 7h10v9h-2v6H9v-6H7v6H5v-6H3zm18-4h-6v2h6zm-4 4h4v2h-4zm4 4h-6v2h6zm-6 8h6v2h-6zm6-4h-4v2h4z"></svg:path>`,
})
export class PixelarticonsHumanHeightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
