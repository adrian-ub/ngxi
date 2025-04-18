import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusCodeIcon],svg[nimbus-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.539.613l-3.9 14.55l1.209.324L10.746.937L9.54.612zm-5.63 3.434L.598 7.137a1.24 1.24 0 0 0 0 1.821l3.25 3.091l.921-.85l-3.321-3.15l3.321-3.112zm11.893 3.091l-3.31-3.091l-.861.91l3.32 3.091l-3.32 3.111l.92.85l3.251-3.05a1.24 1.24 0 0 0 0-1.821"></svg:path>`,
})
export class NimbusCodeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
