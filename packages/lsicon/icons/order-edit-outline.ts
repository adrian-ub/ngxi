import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconOrderEditOutlineIcon],svg[lsicon-order-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M6 2.5H3.5v12h9v-12H10m-5 9h6m-5-8h4l.5-2h-5zM6 10l1.5-.5l3-3l-1-1l-3 3z"></svg:path>`,
})
export class LsiconOrderEditOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
