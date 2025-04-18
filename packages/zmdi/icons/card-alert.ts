import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCardAlertIcon],svg[zmdi-card-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 3q17 0 29.5 12.5T341 45v342q0 17-12.5 29.5T299 429H43q-18 0-30.5-12.5T0 387V131L128 3zM192 323v-43h-43v43zm0-86V131h-43v106z"></svg:path>`,
})
export class ZmdiCardAlertIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
