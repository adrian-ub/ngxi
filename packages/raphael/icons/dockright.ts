import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelDockrightIcon],svg[raphael-dockright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.083 7.333v16.334h24.833V7.333zm16.25 13.335H6.083V10.332h13.25z"></svg:path>`,
})
export class RaphaelDockrightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
