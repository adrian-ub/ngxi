import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceNoDroneAllowedIcon],svg[guidance-no-drone-allowed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M14.5 17.5H9s-3-6-8.5-6v-4H5m11 8.42c1.302-1.779 3.85-4.42 7.5-4.42v-4h-16m3-4.5l-1.03.348A12.4 12.4 0 0 1 4 3.909M23.5 3l-1.03.348A12.4 12.4 0 0 1 18.5 4m-5-1l1.03.348C15.81 3.78 17.15 4 18.5 4m0 0v3.5M5 15.5C3 15.5.5 18 .5 21M19 15.5c2 0 4.5 2.5 4.5 5.5M.5.5l10.358 10.358M23.5 23.5l-9.858-9.858m-2.784-2.784a2 2 0 0 1 2.784 2.784m-2.784-2.784l2.784 2.784"></svg:path>`,
})
export class GuidanceNoDroneAllowedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
