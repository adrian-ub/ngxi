import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleNumber7Icon],svg[gravity-ui-circle-number-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.5 5a.75.75 0 1 0 0 1.5h2.174l-1.378 3.74a.75.75 0 0 0 1.408.52l1.75-4.75A.75.75 0 0 0 9.75 5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleNumber7Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
