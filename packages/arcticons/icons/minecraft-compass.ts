import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinecraftCompassIcon],svg[arcticons-minecraft-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.857 16.072v-2.643h-2.643v-2.643H31.93V8.143H16.07v2.643h-5.285v2.643H8.143v2.643H5.5v15.857h2.643v2.643h2.643v2.642h5.285v2.643H31.93v-2.643h5.285v-2.642h2.643v-2.643H42.5V16.072z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.144 24v2.643h2.642v2.643h5.286v2.643h15.857v-2.643h5.285v-2.643h2.643V24m-10.32-8.075v2.391h-2.643v2.392h-2.643v2.391h5.286v-2.391h2.643v-2.392h2.643v-2.391z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.861 25.993v-5.286h2.391v5.286z"></svg:path>`,
})
export class ArcticonsMinecraftCompassIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
