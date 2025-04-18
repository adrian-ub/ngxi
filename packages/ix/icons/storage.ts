import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixStorageIcon],svg[ix-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.667 85.336v64h42.666v-21.333h213.334v21.333h42.666v-64zm320 85.333H85.333v64H128v-21.333h256v21.333h42.667zm-320 128h298.666v106.667H106.667zM448 448.003v-192H64v192zm-256-85.334h128v-42.666H192z" clip-rule="evenodd"></svg:path>`,
})
export class IxStorageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
