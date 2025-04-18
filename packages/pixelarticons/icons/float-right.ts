import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFloatRightIcon],svg[pixelarticons-float-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4h6v8h-8V4zm4 6V6h-4v4zm-8-4H2v2h10zm0 4H2v2h10zm10 4v2H2v-2zm0 6v-2H2v2z"></svg:path>`,
})
export class PixelarticonsFloatRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
