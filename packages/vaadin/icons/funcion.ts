import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinFuncionIcon],svg[vaadin-funcion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0S7.9 0 7.3 3l-.4 2H5l-.5 1h2.2l-1.4 7c-.4 2-1.9 2-1.9 2h-1L2 16h3s2.1 0 2.7-3l1.4-7h2.4l.5-1H9.3l.4-2c.4-2 1.8-2 1.8-2h1l.5-1z"></svg:path>`,
})
export class VaadinFuncionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
