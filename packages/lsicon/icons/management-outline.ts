import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconManagementOutlineIcon],svg[lsicon-management-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M6 2.5H3.5v12h9v-12H10m-5 8h6m-4-1v2m-2-4h6m-2-1v2m-3-5l-.5-2h5l-.5 2z"></svg:path>`,
})
export class LsiconManagementOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
