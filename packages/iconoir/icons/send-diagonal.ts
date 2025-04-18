import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSendDiagonalIcon],svg[iconoir-send-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22.153 3.553L11.176 21.004l-1.67-8.596L2 7.898zM9.456 12.444l12.696-8.89"></svg:path>`,
})
export class IconoirSendDiagonalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
