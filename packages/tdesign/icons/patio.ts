import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPatioIcon],svg[tdesign-patio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.783 2.06C7.25 1.527 9.365 1 12 1s4.75.527 6.217 1.06a14 14 0 0 1 1.699.74a9 9 0 0 1 .62.356l.011.007l.005.003l.001.001l.002.001l.445.297V20h1v2H2v-2h1V3.465l.445-.297l.002-.001l.001-.001l.005-.003l.011-.007a3 3 0 0 1 .163-.101q.161-.098.457-.254c.395-.206.966-.474 1.7-.74M5 4.58V20h2V7.5h2v2h2v-2h2V20h6V4.579l-.01-.005c-.324-.17-.815-.4-1.457-.634C16.25 3.473 14.365 3 12 3s-4.25.473-5.533.94A12 12 0 0 0 5 4.579M9 11.5V13h2v-1.5zm2 3.5H9v1.5h2zm0 3.5H9V20h2z"></svg:path>`,
})
export class TdesignPatioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
