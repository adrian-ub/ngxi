import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiLockOpenIcon],svg[zmdi-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.5 347q-17.5 0-30-12.5T128 304t12.5-30.5t30-12.5t30 12.5T213 304t-12.5 30.5t-30 12.5M299 155q17 0 29.5 12.5T341 197v214q0 17-12.5 29.5T299 453H43q-18 0-30.5-12.5T0 411V197q0-17 12.5-29.5T43 155h194v-43q0-27-19.5-46.5t-47-19.5T124 65.5T105 112H64q0-44 31.5-75.5T171 5t75 31.5t31 75.5v43zm0 256V197H43v214z"></svg:path>`,
})
export class ZmdiLockOpenIcon {
  readonly viewBox = input("0 0 344 456")
  readonly width = input("0.76em")
  readonly height = input("1em")
}
