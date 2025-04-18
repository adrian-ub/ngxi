import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightLayersIcon],svg[mdi-light-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.7 11l8.67-6.75l8.93 6.98L11.63 18zm16 .21L11.39 5.5L4.32 11l7.31 5.73zM11.63 21L2.7 14l.8-.6l8.11 6.35l7.89-6.16l.8.64z"></svg:path>`,
})
export class MdiLightLayersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
