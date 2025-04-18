import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoLeafIcon],svg[entypo-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.025 3.587c-4.356 2.556-4.044 7.806-7.096 10.175c-2.297 1.783-5.538.88-7.412.113c0 0-1.27 1.603-2.181 3.74c-.305.717-1.644-.073-1.409-.68C3.905 9.25 14.037 5.416 14.037 5.416s-7.149-.303-11.927 5.94c-.128-1.426-.34-5.284 3.36-7.65c5.016-3.211 14.572-.715 13.555-.119"></svg:path>`,
})
export class EntypoLeafIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
