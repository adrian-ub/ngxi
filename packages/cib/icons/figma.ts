import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibFigmaIcon],svg[cib-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16c0-7.109 10.667-7.109 10.667 0S16 23.109 16 16M5.333 26.667a5.33 5.33 0 0 1 5.333-5.333h5.333v5.333c0 7.109-10.667 7.109-10.667 0zM16 0v10.667h5.333c7.109 0 7.109-10.667 0-10.667zM5.333 5.333a5.33 5.33 0 0 0 5.333 5.333h5.333V-.001h-5.333a5.33 5.33 0 0 0-5.333 5.333zm0 10.667a5.33 5.33 0 0 0 5.333 5.333h5.333V10.666h-5.333a5.33 5.33 0 0 0-5.333 5.333z"></svg:path>`,
})
export class CibFigmaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
