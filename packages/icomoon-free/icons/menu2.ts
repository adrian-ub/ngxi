import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeMenu2Icon],svg[icomoon-free-menu2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h14v3H0zm0 4h14v3H0zm0 4h14v3H0zm15.5-2l3 3l3-3zm6-1l-3-3l-3 3z"></svg:path>`,
})
export class IcomoonFreeMenu2Icon {
  readonly viewBox = input("0 0 22 16")
  readonly width = input("1.38em")
  readonly height = input("1em")
}
