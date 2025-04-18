import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixStorageFilledIcon],svg[ix-storage-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106.667 85.336v64h42.666v-21.333h213.334v21.333h42.666v-64zm-21.334 85.333h341.334v64H384v-21.333H128v21.333H85.333z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M448 256.003v192H64v-192zM170.667 362.669h170.666v-42.666H170.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxStorageFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
