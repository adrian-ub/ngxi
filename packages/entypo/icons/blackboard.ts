import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoBlackboardIcon],svg[entypo-blackboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.539 20H6l1.406-3.698l-2.966-1.004zm10.055-3.698L14 20h3.461l-1.901-4.702zM18 2h-6.5L11 0H9l-.5 2H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path>`,
})
export class EntypoBlackboardIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
