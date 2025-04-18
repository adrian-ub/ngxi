import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAlignTxtLeftFilledIcon],svg[lsicon-align-txt-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zM12 6H4V5h8zM9 8.5H4v-1h5zM4 11h8v-1H4z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAlignTxtLeftFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
