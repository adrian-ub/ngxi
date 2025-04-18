import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7AppFillIcon],svg[f7-app-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46.586 9.45c-2.39-2.391-5.766-2.766-9.75-2.766H19.117c-3.937 0-7.312.375-9.703 2.765s-2.742 5.742-2.742 9.657v17.718c0 4.008.352 7.336 2.742 9.727s5.766 2.765 9.774 2.765h17.648c3.984 0 7.36-.375 9.75-2.765s2.742-5.719 2.742-9.727V19.176c0-4.008-.351-7.36-2.742-9.727"></svg:path>`,
})
export class F7AppFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
