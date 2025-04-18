import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsTeachIcon],svg[pixelarticons-teach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2H5v4h4zm7 7V7H2v9h2v6h2v-6h2v6h2V9zm-5-7h11v14H11v-2h9V4h-9z"></svg:path>`,
})
export class PixelarticonsTeachIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
