import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDataFilledIcon],svg[lsicon-data-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zm8 0a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zM2 7a.5.5 0 0 1 .5-.5h6A.5.5 0 0 1 9 7v2a.5.5 0 0 1-.5.5h-6A.5.5 0 0 1 2 9zm.5 4a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDataFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
