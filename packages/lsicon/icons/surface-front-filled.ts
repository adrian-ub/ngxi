import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSurfaceFrontFilledIcon],svg[lsicon-surface-front-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.26 2h7.48L14 4.825V14H2V4.825zm.48 1l-1.2 1.5h8.92L11.26 3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSurfaceFrontFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
