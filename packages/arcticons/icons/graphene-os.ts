import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGrapheneOsIcon],svg[arcticons-graphene-os-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.458 16.956l-6.589-3.804m6.589 17.895l-6.589 3.804m-12.202-7.046v-7.607m8.46 14.653l-6.589-3.804m18.79-3.242v-7.607m-12.201-7.046l-6.589 3.804"></svg:path><svg:circle cx="24" cy="12.071" r="2.161" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="35.929" r="2.161" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34.331" cy="29.965" r="2.161" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34.331" cy="18.035" r="2.161" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="13.669" cy="29.965" r="2.161" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="13.669" cy="18.035" r="2.161" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 9.91V2.5m0 43v-7.41m12.202-21.135l6.418-3.705M5.38 34.75l6.418-3.705m24.404 0l6.418 3.705M5.38 13.25l6.418 3.705"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsGrapheneOsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
