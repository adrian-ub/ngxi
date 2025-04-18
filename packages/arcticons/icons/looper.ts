import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLooperIcon],svg[arcticons-looper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.069 17.402A20.995 20.995 0 0 1 24.001 3.005c11.595 0 20.994 9.4 20.994 20.995c0 1.426-.145 2.848-.433 4.245m-.619 2.32A20.995 20.995 0 0 1 24 44.995c-11.595 0-20.995-9.4-20.995-20.995c0-1.439.148-2.874.442-4.283"></svg:path><svg:circle cx="3.721" cy="18.566" r="1.221" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="44.279" cy="29.434" r="1.221" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsLooperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
