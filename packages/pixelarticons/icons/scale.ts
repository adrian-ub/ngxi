import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsScaleIcon],svg[pixelarticons-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3h-8v2h4v2h2v4h2zm-4 4h-2v2h-2v2h2V9h2zm-8 8h2v-2H9zH7v2h2zm-4-2v4h2v2H5h6v2H3v-8z"></svg:path>`,
})
export class PixelarticonsScaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
