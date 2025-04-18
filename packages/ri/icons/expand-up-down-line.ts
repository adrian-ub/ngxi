import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExpandUpDownLineIcon],svg[ri-expand-up-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.207 9.043L12 2.836L5.793 9.043l1.414 1.414L12 5.664l4.793 4.793zM5.793 14.957L12 21.164l6.207-6.207l-1.414-1.414L12 18.336l-4.793-4.793z"></svg:path>`,
})
export class RiExpandUpDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
