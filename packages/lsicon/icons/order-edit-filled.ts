import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconOrderEditFilledIcon],svg[lsicon-order-edit-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.106 1.192A.5.5 0 0 1 5.5 1h5a.5.5 0 0 1 .485.621L10.89 2h1.61a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h1.61l-.095-.379a.5.5 0 0 1 .09-.429M9.86 2H6.14l.25 1h3.22zM11 12H5v-1h6zm-5-2l1.5-.5l3-3l-1-1l-3 3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconOrderEditFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
