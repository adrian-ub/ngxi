import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiMicSettingIcon],svg[zmdi-mic-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 496v-43h42v43zm106.5-235q-26.5 0-45.5-18.5T85 197V69q0-26 19-45t45.5-19t45 19T213 69v128q0 27-18.5 45.5t-45 18.5M128 496v-43h43v43zm85 0v-43h43v43zm86-299q0 54-37.5 95T171 341v70h-43v-70q-53-8-90.5-49T0 197h36q0 47 34 78t79.5 31t79-31t33.5-78z"></svg:path>`,
})
export class ZmdiMicSettingIcon {
  readonly viewBox = input("0 0 304 496")
  readonly width = input("0.62em")
  readonly height = input("1em")
}
