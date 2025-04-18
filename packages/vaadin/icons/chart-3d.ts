import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinChart3dIcon],svg[vaadin-chart-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4V2L8 0L4 2v1L0 5v5l12 6l4-2V6zm-8 6.88l-3-1.5v-3.3l3 1.53zm0-4.39l-2.34-1.2L4 4.12zm4 6.39l-3-1.5V3.07l3 1.54zM5.66 2.29L8 1.12l2.34 1.17L8 3.49zM12 14.88l-3-1.5V7.07l3 1.54zm0-7.39l-2.34-1.2L12 5.12l2.34 1.17z"></svg:path>`,
})
export class VaadinChart3dIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
