import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixGroupIcon],svg[ix-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 64v42.667h-64v298.666h64V448H64V64zM448 64v384H341.333v-42.667h64V106.667h-64V64zm-85.333 256v42.667H149.333V320zm0-85.333v42.666H149.333v-42.666zm0-85.334V192H149.333v-42.667z"></svg:path>`,
})
export class IxGroupIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
