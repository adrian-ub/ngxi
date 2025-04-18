import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilScalingRightIcon],svg[uil-scaling-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.92 2.62a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-4a1 1 0 0 0 0 2h1.59L12 10.59L9.88 8.46a1 1 0 0 0-1.42 1.42L10.59 12L4 18.59V17a1 1 0 0 0-2 0v4a1 1 0 0 0 .08.38a1 1 0 0 0 .54.54A1 1 0 0 0 3 22h4a1 1 0 0 0 0-2H5.41L12 13.41l2.12 2.13a1 1 0 0 0 .71.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.42L13.41 12L20 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38"></svg:path>`,
})
export class UilScalingRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
