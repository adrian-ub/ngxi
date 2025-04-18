import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBrokenImageIcon],svg[zmdi-broken-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 43v140l-64-64l-85 86l-86-86l-85 86l-64-65V43q0-18 12.5-30.5T43 0h298q18 0 30.5 12.5T384 43m-64 137l64 64v97q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V201l64 64l85-86l86 86z"></svg:path>`,
})
export class ZmdiBrokenImageIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
