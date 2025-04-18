import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiAndroidAltIcon],svg[zmdi-android-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 317v-85h299v85q0 62-44 106t-106 44t-105.5-44T0 317M237 69q29 21 45.5 52.5T299 189v22H0v-22q0-36 16.5-67.5T61 69L17 24L34 7l49 49q32-16 66-16t66 16l50-49l17 17zM85.5 168q8.5 0 15-6.5t6.5-15t-6.5-15t-15-6.5t-15 6.5t-6.5 15t6.5 15t15 6.5m128 0q8.5 0 15-6.5t6.5-15t-6.5-15t-15-6.5t-15 6.5t-6.5 15t6.5 15t15 6.5"></svg:path>`,
})
export class ZmdiAndroidAltIcon {
  readonly viewBox = input("0 0 304 472")
  readonly width = input("0.65em")
  readonly height = input("1em")
}
