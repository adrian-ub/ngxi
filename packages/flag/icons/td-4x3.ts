import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagTd4x3Icon],svg[flag-td-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#002664" d="M0 0h214v480H0z"></svg:path><svg:path fill="#c60c30" d="M426 0h214v480H426z"></svg:path><svg:path fill="#fecb00" d="M214 0h212v480H214z"></svg:path></svg:g>`,
})
export class FlagTd4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
