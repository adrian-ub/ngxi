import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinBuildingOIcon],svg[vaadin-building-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0v16h12V0zm11 15H9v-3H7v3H3V1h10z"></svg:path><svg:path fill="currentColor" d="M4 9h2v2H4zm3 0h2v2H7zm3 0h2v2h-2zM4 6h2v2H4zm3 0h2v2H7zm3 0h2v2h-2zM4 3h2v2H4zm3 0h2v2H7zm3 0h2v2h-2z"></svg:path>`,
})
export class VaadinBuildingOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
