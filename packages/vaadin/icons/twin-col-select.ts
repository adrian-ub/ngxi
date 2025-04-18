import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinTwinColSelectIcon],svg[vaadin-twin-col-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2v12h16V2zm7 11H1V3h6zm8 0H9V3h6z"></svg:path><svg:path fill="currentColor" d="M10 4h4v1h-4zM2 4h4v1H2zm0 2h4v1H2zm0 2h4v1H2z"></svg:path>`,
})
export class VaadinTwinColSelectIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
