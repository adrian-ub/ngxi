import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinBuildingIcon],svg[vaadin-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0v16h4v-3h2v3h4V0zm3 12H4v-2h2zm0-3H4V7h2zm0-3H4V4h2zm0-3H4V1h2zm3 9H7v-2h2zm0-3H7V7h2zm0-3H7V4h2zm0-3H7V1h2zm3 9h-2v-2h2zm0-3h-2V7h2zm0-3h-2V4h2zm0-3h-2V1h2z"></svg:path>`,
})
export class VaadinBuildingIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
