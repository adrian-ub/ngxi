import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhManualshiftIcon],svg[whh-manualshift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.428 238v274q0 26-18.5 45t-45.5 19h-320v210q29 17 46.5 46t17.5 64q0 53-37.5 90.5t-90.5 37.5t-90.5-37.5t-37.5-90.5q0-35 17.5-64t46.5-46V576h-256v210q29 17 46.5 46t17.5 64q0 53-37.5 90.5t-90.5 37.5t-90.5-37.5T.428 896q0-35 17.5-64t46.5-46V238q-29-17-46.5-46t-17.5-64q0-53 37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5q0 35-17.5 64t-46.5 46v210h256V238q-29-17-46.5-46t-17.5-64q0-53 37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5q0 35-17.5 64t-46.5 46v210h256V238q-29-17-46.5-46t-17.5-64q0-53 37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5q0 35-17.5 64t-46.5 46"></svg:path>`,
})
export class WhhManualshiftIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
