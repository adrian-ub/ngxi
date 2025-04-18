import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixProjectServerIcon],svg[ix-project-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 64h277.334v85.333H320v-42.666H85.333v192h192v42.666H224V384h32v42.667H149.333V384h32v-42.667H42.667V64zm192 95.549l-74.666-43.119L128 159.549v86.236l74.667 43.12l74.666-43.12zm-128 73.921v-50.228L192 207.867v50.243zm64 24.64v-50.243L256 183.242v50.228zm-10.666-117.045l41.854 24.171l-41.854 24.156l-41.855-24.156zm266.666 29.602V448H298.667V170.667zm-42.666 42.666h-85.334V256h85.334zm-85.334 192v-128h85.334v128zm64-85.333v42.667h-42.666V320z" clip-rule="evenodd"></svg:path>`,
})
export class IxProjectServerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
