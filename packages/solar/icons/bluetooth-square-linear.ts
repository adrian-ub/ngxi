import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothSquareLinearIcon],svg[solar-bluetooth-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13.933 9.8L11 12V8c0-.872 0-1.309.276-1.447c.277-.138.626.124 1.324.647l1.333 1c.49.367.734.55.734.8s-.245.434-.734.8Zm0 6l-1.333 1c-.698.524-1.047.785-1.324.647C11 17.31 11 16.873 11 16v-4l2.933 2.2c.49.367.734.55.734.8s-.245.433-.734.8Z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path fill="currentColor" d="M8.48 8.924a.75.75 0 1 0-.96 1.152zm3 2.5l-3-2.5l-.96 1.152l3 2.5z"></svg:path><svg:path fill="currentColor" d="M8.48 15.076a.75.75 0 0 1-.96-1.152zm3-2.5l-3 2.5l-.96-1.152l3-2.5z"></svg:path></svg:g>`,
})
export class SolarBluetoothSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
