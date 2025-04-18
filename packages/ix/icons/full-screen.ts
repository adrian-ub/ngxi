import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFullScreenIcon],svg[ix-full-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.667 64H64v128h42.667v-85.333H192V64zm0 256H64v128h128v-42.667h-85.333zM320 64v42.667h85.333V192H448V64zm85.333 341.333H320V448h128V320h-42.667z"></svg:path>`,
})
export class IxFullScreenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
