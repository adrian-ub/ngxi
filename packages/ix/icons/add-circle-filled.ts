import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAddCircleFilledIcon],svg[ix-add-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667A213.333 213.333 0 0 1 469.334 256c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m21.334 106.667h-42.667v85.333h-85.333v42.667l85.333-.001v85.334h42.667l-.001-85.334h85.334v-42.666h-85.334z"></svg:path>`,
})
export class IxAddCircleFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
