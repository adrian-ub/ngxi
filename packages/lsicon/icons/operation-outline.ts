import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconOperationOutlineIcon],svg[lsicon-operation-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8 11.5h5.5v-9h-11v9zm0 0v2m0 0H5m3 0h3m-6.5-5l2.5-2L8.5 8l3-2.5"></svg:path>`,
})
export class LsiconOperationOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
