import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCubeTree20FilledIcon],svg[fluent-cube-tree-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.573 2.066a1.5 1.5 0 0 1 .854 0l2.858.85a1 1 0 0 1 .715.958v4.254a1 1 0 0 1-.715.958l-2.792.83l.007.084v1H12a2 2 0 0 1 2 2v.05a2.5 2.5 0 1 1-1 0V13a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v.05a2.5 2.5 0 1 1-1 0V13a2 2 0 0 1 2-2h1.5v-1q0-.044.007-.085l-2.792-.83A1 1 0 0 1 6 8.128V3.874a1 1 0 0 1 .715-.959zm-.915 2.46a.5.5 0 0 0-.316.95L9.5 5.86V7a.5.5 0 0 0 1 0V5.86l1.158-.386a.5.5 0 1 0-.316-.948L10 4.974z"></svg:path>`,
})
export class FluentCubeTree20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
