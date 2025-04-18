import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinecraftIcon],svg[arcticons-minecraft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 45L5.756 34.467V13.533L24 24.066z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.72 22.749l-2.281-1.316l-2.28-1.317l-2.281-1.317l-2.28-1.316l-2.281-1.317l-2.28-1.316l-2.281-1.317v7.85L8.037 22.7v2.617l2.28 1.316V21.4l2.281 1.316v-2.617l2.28 1.317v5.234l2.281 1.316v-2.617l2.28 1.317v2.617l2.281 1.316v-2.616L24 29.299v-5.233z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 24.066L5.756 13.533L24 3l18.243 10.533z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.243 34.467L24 45V24.066l18.243-10.533z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m39.963 14.85l-2.28 1.316l-2.281 1.317l-2.28 1.316l-2.281 1.317l-2.28 1.317l-2.281 1.316L24 24.066v7.85l2.28-1.317v2.617l2.281-1.316v-5.234l2.28-1.317v-2.616l2.281-1.317v5.234l2.28-1.317v-2.617l2.281-1.316v2.616l2.28-1.316v-2.617l2.28-1.317v-5.233z"></svg:path>`,
})
export class ArcticonsMinecraftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
