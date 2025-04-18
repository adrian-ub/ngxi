import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixUnlockFilledIcon],svg[ix-unlock-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.666 469.334V256h-256v-86.4c0-46.337 38.003-84.266 85.334-84.266c47.33 0 85.333 37.929 85.333 84.266H384c0-70.305-57.51-126.933-128-126.933S128 99.295 128 169.6V256H85.333v213.334z"></svg:path>`,
})
export class IxUnlockFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
