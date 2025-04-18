import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFloatLeftIcon],svg[pixelarticons-float-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h6v8H2V4zm4 6V6H4v4zm14-4H12v2h10zm0 4H12v2h10zm0 4v2H2v-2zm0 6v-2H2v2z"></svg:path>`,
})
export class PixelarticonsFloatLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
