import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinThinSquareIcon],svg[vaadin-thin-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1H1v14h14zm-1 13H2V2h12z"></svg:path>`,
})
export class VaadinThinSquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
