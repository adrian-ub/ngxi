import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiSmartphoneSettingIcon],svg[zmdi-smartphone-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 512v-43h43v43zm86 0v-43h42v43zm85 0v-43h43v43zM213 0q18 0 30.5 12.5T256 43v341q0 18-12.5 30.5T213 427H43q-18 0-30.5-12.5T0 384V43q0-18 12.5-30.5T43 0zm0 341V85H43v256z"></svg:path>`,
})
export class ZmdiSmartphoneSettingIcon {
  readonly viewBox = input("0 0 256 512")
  readonly width = input("0.5em")
  readonly height = input("1em")
}
