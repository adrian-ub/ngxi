import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSnapbridgeIcon],svg[arcticons-snapbridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 20.5c0 4.418-8.283 8-18.5 8s-18.5-3.582-18.5-8v-7"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 27.5c0 4.418 8.283 8 18.5 8s18.5-3.582 18.5-8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 27.5v7c0 4.418 8.283 8 18.5 8s18.5-3.582 18.5-8v-21"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 12.5v7c7.314 0 13.636 1.835 16.64 4.5m-7.39-10.429V6.693m0 20.735v6.908"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 28.5v-7c-10.217 0-18.5-3.582-18.5-8s8.283-8 18.5-8s18.5 3.582 18.5 8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 20.468c0-4.419-8.283-8-18.5-8c-7.33 0-13.663 1.843-16.658 4.515"></svg:path>`,
})
export class ArcticonsSnapbridgeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
