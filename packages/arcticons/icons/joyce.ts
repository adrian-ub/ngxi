import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJoyceIcon],svg[arcticons-joyce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="15.691" cy="14.661" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.845" cy="14.661" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28.155" cy="14.661" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32.309" cy="14.661" r=".75" fill="currentColor"></svg:circle><svg:circle cx="15.691" cy="18.796" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.845" cy="18.796" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="18.796" r=".7" fill="currentColor"></svg:circle><svg:circle cx="28.155" cy="18.796" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32.309" cy="18.796" r=".75" fill="currentColor"></svg:circle><svg:circle cx="36.464" cy="18.796" r=".75" fill="currentColor"></svg:circle><svg:circle cx="11.536" cy="18.796" r=".75" fill="currentColor"></svg:circle><svg:circle cx="15.691" cy="22.932" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.845" cy="22.932" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="22.932" r=".7" fill="currentColor"></svg:circle><svg:circle cx="28.155" cy="22.932" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32.309" cy="22.932" r=".75" fill="currentColor"></svg:circle><svg:circle cx="36.464" cy="22.932" r=".75" fill="currentColor"></svg:circle><svg:circle cx="11.536" cy="22.932" r=".75" fill="currentColor"></svg:circle><svg:circle cx="15.691" cy="27.068" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.845" cy="27.068" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="27.068" r=".7" fill="currentColor"></svg:circle><svg:circle cx="28.155" cy="27.068" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32.309" cy="27.068" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.845" cy="31.204" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="31.204" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28.155" cy="31.204" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="35.339" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsJoyceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
