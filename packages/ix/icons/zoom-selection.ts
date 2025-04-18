import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixZoomSelectionIcon],svg[ix-zoom-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M266.667 170.667C331.468 170.667 384 223.199 384 288c0 24.693-7.628 47.605-20.656 66.507l81.218 81.218l-30.17 30.17l-81.218-81.218c-18.903 13.028-41.814 20.656-66.507 20.656c-64.802 0-117.334-52.532-117.334-117.333s52.532-117.333 117.334-117.333m0 42.666C225.429 213.333 192 246.763 192 288s33.43 74.667 74.667 74.667s74.666-33.43 74.666-74.667s-33.43-74.667-74.666-74.667m181.333 64v64h-42.667v-64zm-341.333 0v21.334H128v42.666H64v-64zm0-106.666v64H64v-64zm341.333 0v64h-42.667v-64zM448 64v64h-42.667v-21.333H384V64zm-320 0v42.667h-21.333V128H64V64zm213.333 0v42.667h-64V64zm-106.666 0v42.667h-64V64z"></svg:path>`,
})
export class IxZoomSelectionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
