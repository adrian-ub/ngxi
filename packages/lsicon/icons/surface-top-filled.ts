import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSurfaceTopFilledIcon],svg[lsicon-surface-top-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 .95l1.293.596L15 4.18v7.64l-7 3.23l-7-3.23V4.18zM2 5.28v5.9l5.5 2.538v-5.9zm6.5 2.54v5.899L14 11.18V5.281z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSurfaceTopFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
