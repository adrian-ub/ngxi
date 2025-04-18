import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBrightnessSettingIcon],svg[zmdi-brightness-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 0q17 0 29.5 12.5T469 43v298q0 18-12.5 30.5T427 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm0 342V42H43v300zm-278-65v-53l-32-32l32-32v-53h54l32-32l32 32h53v53l32 32l-32 32v53h-53l-32 32l-32-32zm86-149v128q26 0 45-18.5t19-45.5t-19-45.5t-45-18.5"></svg:path>`,
})
export class ZmdiBrightnessSettingIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}
