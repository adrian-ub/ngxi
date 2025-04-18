import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinEjectIcon],svg[vaadin-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11h14L8 1zm0 1h14v3H1z"></svg:path>`,
})
export class VaadinEjectIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
