import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixWebcamIcon],svg[ix-webcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M341.334 106.667c70.692 0 128 57.308 128 128s-57.308 128-128 128H170.667c-70.692 0-128-57.308-128-128s57.308-128 128-128zm0 42.667H170.667c-47.128 0-85.333 38.205-85.333 85.333c0 45.7 35.924 83.01 81.074 85.229l4.259.104h170.667c47.128 0 85.333-38.205 85.333-85.333c0-45.7-35.925-83.01-81.074-85.229zM256 170.667c35.347 0 64 28.654 64 64s-28.653 64-64 64c-35.346 0-64-28.654-64-64s28.654-64 64-64m0 42.667c-11.782 0-21.333 9.55-21.333 21.333S244.218 256 256 256s21.334-9.55 21.334-21.333s-9.552-21.333-21.334-21.333M384 384v42.667H128V384z"></svg:path>`,
})
export class IxWebcamIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
