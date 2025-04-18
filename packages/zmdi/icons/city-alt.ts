import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCityAltIcon],svg[zmdi-city-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 85h214v299H0V0h213zM85 341v-42H43v42zm0-85v-43H43v43zm0-85v-43H43v43zm0-86V43H43v42zm86 256v-42h-43v42zm0-85v-43h-43v43zm0-85v-43h-43v43zm0-86V43h-43v42zm213 256V128H213v43h43v42h-43v43h43v43h-43v42zm-43-170v42h-42v-42zm0 85v43h-42v-43z"></svg:path>`,
})
export class ZmdiCityAltIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
