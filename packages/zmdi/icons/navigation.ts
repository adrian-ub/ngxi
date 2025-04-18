import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiNavigationIcon],svg[zmdi-navigation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m160 3l160 390l-15 15l-145-64l-145 64l-15-15z"></svg:path>`,
})
export class ZmdiNavigationIcon {
  readonly viewBox = input("0 0 320 408")
  readonly width = input("0.79em")
  readonly height = input("1em")
}
