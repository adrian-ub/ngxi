import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riEditCircleFillIcon],svg[ri-edit-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.626 3.129L9.29 10.462l.01 4.248l4.238-.008l7.331-7.33A9.96 9.96 0 0 1 22 11.996c0 5.523-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10c1.669 0 3.242.409 4.626 1.131m3.86-1.032l1.413 1.414l-9.192 9.193l-1.412.002l-.002-1.416z"></svg:path>`,
})
export class RiEditCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
