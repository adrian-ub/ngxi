import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiDeviceHubIcon],svg[zmdi-device-hub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 277h85v107H277v-65l-85-90l-85 90v65H0V277h85l86-85v-68q-19-7-31-23.5T128 64q0-27 18.5-45.5T192 0t45.5 18.5T256 64q0 20-12 36.5T213 124v68z"></svg:path>`,
})
export class ZmdiDeviceHubIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
