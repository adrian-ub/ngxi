import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinHarddriveOIcon],svg[vaadin-harddrive-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12h1v1H2zm2 0h3v1H4z"></svg:path><svg:path fill="currentColor" d="M13 1H3l-3 9v5h16v-5zM3.7 2h8.6l2.7 8H1.1zM1 14v-3h14v3z"></svg:path>`,
})
export class VaadinHarddriveOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
