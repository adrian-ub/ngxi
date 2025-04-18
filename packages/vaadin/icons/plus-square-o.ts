import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinPlusSquareOIcon],svg[vaadin-plus-square-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7H9V4H7v3H4v2h3v3h2V9h3z"></svg:path><svg:path fill="currentColor" d="M15 1H1v14h14zm-1 13H2V2h12z"></svg:path>`,
})
export class VaadinPlusSquareOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
