import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconBatchAddFilledIcon],svg[lsicon-batch-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 2a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zM2 4v9.5a.5.5 0 0 0 .5.5H12v-1H3V4zm6.5.5v2h-2v1h2v2h1v-2h2v-1h-2v-2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconBatchAddFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
