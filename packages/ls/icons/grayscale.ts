import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsGrayscaleIcon],svg[ls-grayscale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 646V48h768v598zm383-114v63h64v-63h65v-61h-65v-63h65v-61h-65v-62h65v-61h-65v-63h65V99h-65v62h-64V99h-65v62h-62V99H51v496h267v-63zm0-371v63h-65v-63zM256 285v-61h62v61zm191 0h-64v-61h64zm-129 0h65v62h-65zm-62 123v-61h62v61zm191 0h-64v-61h64zm-129 63v-63h65v63zm-62 61v-61h62v61zm127-61h64v61h-64z"></svg:path>`,
})
export class LsGrayscaleIcon {
  readonly viewBox = input("0 0 768 646")
  readonly width = input("1.19em")
  readonly height = input("1em")
}
