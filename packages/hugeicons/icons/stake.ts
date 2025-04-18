import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStakeIcon],svg[hugeicons-stake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8 6c3.314 0 6-.895 6-2s-2.686-2-6-2s-6 .895-6 2s2.686 2 6 2m7.5 3a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13"></svg:path><svg:path d="M15.5 19c.105 0 .202-.05.397-.148l1.564-.796c.693-.352 1.039-.527 1.039-.806v-3.5m-3 5.25c-.105 0-.202-.05-.397-.148l-1.564-.796c-.693-.352-1.039-.527-1.039-.806v-3.5m3 5.25v-3.5m3-1.75c0-.279-.346-.454-1.039-.806l-1.564-.796c-.195-.098-.292-.148-.397-.148s-.202.05-.397.148l-1.564.796c-.693.351-1.039.527-1.039.806m6 0c0 .279-.346.454-1.039.806l-1.564.796c-.195.098-.292.148-.397.148m-3-1.75c0 .279.346.454 1.039.806l1.564.796c.195.098.292.148.397.148M2 4v8.043c0 .704 1.178 1.59 4.13 1.957M2.107 8.548C3.312 9.61 5.46 10.06 7.754 10.06m6.234-5.939v2.015"></svg:path></svg:g>`,
})
export class HugeiconsStakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
