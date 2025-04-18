import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixScreenDuplicateIcon],svg[ix-screen-duplicate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M362.667 64v192H320V106.667H85.333v170.666H256V320h-32v42.667h32v42.666H149.333v-42.666h32V320H42.667V64z"></svg:path><svg:path fill="currentColor" d="M277.333 277.333h149.334v21.334h-128v128h-21.334z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M320 320h149.333v149.333H320zm128 64v21.333h-42.667V448H384v-42.667h-42.667V384H384v-42.667h21.333V384z" clip-rule="evenodd"></svg:path>`,
})
export class IxScreenDuplicateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
