import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsOperaIcon],svg[ls-opera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M330 0c197 0 337 145 337 357c0 197-140 360-337 360S0 554 0 357C0 149 133 0 330 0m1 636c104 0 126-120 126-274c0-185-28-283-126-283c-113 0-122 132-122 297c0 154 29 260 122 260"></svg:path>`,
})
export class LsOperaIcon {
  readonly viewBox = input("0 0 667 717")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
