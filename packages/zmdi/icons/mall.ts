import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiMallIcon],svg[zmdi-mall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 112q18 0 30.5 12.5T384 155v256q0 17-12.5 29.5T341 453H43q-18 0-30.5-12.5T0 411V155q0-18 12.5-30.5T43 112h42q0-44 31.5-75.5T192 5t75.5 31.5T299 112zM192 48q-27 0-45.5 18.5T128 112h128q0-27-18.5-45.5T192 48m0 213q44 0 75.5-31t31.5-75h-43q0 26-18.5 45T192 219t-45.5-19t-18.5-45H85q0 44 31.5 75t75.5 31"></svg:path>`,
})
export class ZmdiMallIcon {
  readonly viewBox = input("0 0 384 456")
  readonly width = input("0.85em")
  readonly height = input("1em")
}
