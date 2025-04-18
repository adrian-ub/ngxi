import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconGrabberIcon],svg[codicon-grabber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 6H1v1h14zm0 3H1v1h14z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconGrabberIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
