import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiToysIcon],svg[zmdi-toys-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235 240q0-48 34.5-82.5T352 123t82.5 34.5T469 240zm0 0q0 48-35 82.5T117 357t-82.5-34.5T0 240zm0 0q-48 0-83-34.5T117 123t35-83t83-35zm0 0q48 0 82.5 34.5T352 357t-34.5 83t-82.5 35z"></svg:path>`,
})
export class ZmdiToysIcon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}
