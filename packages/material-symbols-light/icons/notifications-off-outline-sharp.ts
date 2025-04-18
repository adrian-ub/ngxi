import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNotificationsOffOutlineSharpIcon],svg[material-symbols-light-notifications-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18.77v-1h1.616V9.845q0-.575.125-1.156q.126-.582.378-1.11l.77.77q-.137.363-.205.737t-.068.76v7.922h8.353L2.67 4.546l.708-.707l17.285 17.284l-.708.708l-3.073-3.062zm12.385-3.812l-1-1V9.846q0-1.823-1.281-3.104T12 5.462q-.832 0-1.6.286q-.77.287-1.366.86l-.719-.72q.558-.515 1.239-.863T11 4.546V3h2v1.546q1.923.327 3.154 1.824t1.23 3.476zm-5.389 6.427q-.667 0-1.14-.475q-.471-.474-.471-1.14h3.23q0 .67-.475 1.143q-.476.472-1.143.472m.713-11.102"></svg:path>`,
})
export class MaterialSymbolsLightNotificationsOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
