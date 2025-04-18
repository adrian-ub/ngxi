import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsVolumeMinusIcon],svg[pixelarticons-volume-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h-2v2H8v2H6v2H2v8h4v2h2v2h2v2h2zM8 18v-2H6v-2H4v-4h2V8h2V6h2v12zm14-7h-8v2h8z"></svg:path>`,
})
export class PixelarticonsVolumeMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
