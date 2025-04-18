import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwVerticleLeftIcon],svg[uiw-verticle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.886 2.203a.715.715 0 0 1 1-.012a.69.69 0 0 1 .012.986L8.272 9.855l6.992 6.876a.69.69 0 0 1 0 .986a.715.715 0 0 1-1 0L6.893 10.47v6.839a.695.695 0 0 1-.696.692a.695.695 0 0 1-.697-.692V2.692c0-.382.312-.692.697-.692s.697.31.697.692L6.893 9.25Z"></svg:path>`,
})
export class UiwVerticleLeftIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
