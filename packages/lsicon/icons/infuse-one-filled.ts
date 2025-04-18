import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconInfuseOneFilledIcon],svg[lsicon-infuse-one-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1.5a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 .354.146l3.5 3.5A.5.5 0 0 1 13 5v2.5h-1v-2H9a.5.5 0 0 1-.5-.5V2H4v12h5.5v1h-6a.5.5 0 0 1-.5-.5zm5.646 9.646l2-2l.708.708L10.207 11H14.5v1h-4.293l1.147 1.146l-.708.708l-2-2a.5.5 0 0 1 0-.708" clip-rule="evenodd"></svg:path>`,
})
export class LsiconInfuseOneFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
