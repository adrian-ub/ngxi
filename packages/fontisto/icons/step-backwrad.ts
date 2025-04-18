import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoStepBackwradIcon],svg[fontisto-step-backwrad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.108 23.855L2.4 13.361v10.04a.6.6 0 0 1-.599.599H.597a.6.6 0 0 1-.599-.599V.599C-.002.268.266 0 .597 0h1.202c.331 0 .599.268.599.599v10.039L21.106.145a1.142 1.142 0 0 1 1.691 1.001v.024v-.001v21.68c0 .634-.511 1.149-1.143 1.155h-.001a1.1 1.1 0 0 1-.552-.152l.005.003z"></svg:path>`,
})
export class FontistoStepBackwradIcon {
  readonly viewBox = input("0 0 23 24")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
