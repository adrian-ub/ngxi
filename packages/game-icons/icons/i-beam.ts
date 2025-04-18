import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsIBeamIcon],svg[game-icons-i-beam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.557 19L323.44 273h149.003L188.56 19zM25 30.13v25.847L311 311.87v-25.846zm64 107.263v34.584L375 427.87v-84.843l-64-13.002zM77.555 185.89l-42.9 10.723l287.79 257.498l42.9-10.723zM25 212.13v23.847L311 491.87v-23.847zM329 291v21.973l64 16v126.054l-64 16V493h158v-21.973l-64-16V328.973l64-16V291zm112 135.865v14.108l21.88 5.47z"></svg:path>`,
})
export class GameIconsIBeamIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
