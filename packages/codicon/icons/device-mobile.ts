import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconDeviceMobileIcon],svg[codicon-device-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 1h8l.5.5v13l-.5.5h-8l-.5-.5v-13zM5 14h7V2H5zm2.5-2h2v1h-2z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconDeviceMobileIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
