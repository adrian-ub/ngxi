import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackLvIcon],svg[flagpack-lv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#C51918" d="M0 14h32v10H0z"></svg:path><svg:path fill="#F7FCFF" d="M0 8h32v6H0z"></svg:path><svg:path fill="#C51918" d="M0 0h32v10H0z"></svg:path></svg:g>`,
})
export class FlagpackLvIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
