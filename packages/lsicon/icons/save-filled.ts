import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSaveFilledIcon],svg[lsicon-save-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .354.146l2 2A.5.5 0 0 1 14 4.5v9a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5zM3 3v10h2V8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V13h2V4.707L11.293 3H11v2.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5V3zm3 0v2h4V3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSaveFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
