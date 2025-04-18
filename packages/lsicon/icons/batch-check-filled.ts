import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconBatchCheckFilledIcon],svg[lsicon-batch-check-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 2a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zM2 4v9.5a.5.5 0 0 0 .5.5H12v-1H3V4zm9.147 1.146L8.5 7.793L7.354 6.646l-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconBatchCheckFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
