import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidChalkboardIcon],svg[fa6-solid-chalkboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 32c-35.3 0-64 28.7-64 64v288h64V96h384v288h64V96c0-35.3-28.7-64-64-64zm128 352v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h512c17.7 0 32-14.3 32-32s-14.3-32-32-32H416v-32c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32"></svg:path>`,
})
export class Fa6SolidChalkboardIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
