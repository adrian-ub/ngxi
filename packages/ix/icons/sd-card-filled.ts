import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSdCardFilledIcon],svg[ix-sd-card-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.333 42.667H170.667l-64 64v362.666h298.666zM192 170.667V85.333h-42.667v85.334zm42.667-85.334h42.666v85.334h-42.666zm128 0H320v85.334h42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxSdCardFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
