import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixScreensFilledIcon],svg[ix-screens-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M127.998 384V149.333H448V384H309.331v42.667h64v42.666H202.665v-42.666h64V384zm277.355-192H170.665v149.333h234.688zM42.665 298.667V64h320v64h-42.667v-21.333H85.331V256h21.334v42.667zM384 213.333H192V320h192z" clip-rule="evenodd"></svg:path>`,
})
export class IxScreensFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
