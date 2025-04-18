import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAndroidIcon],svg[hugeicons-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.5 9.5a5.5 5.5 0 1 1 11 0V16c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-5c-1.414 0-2.121 0-2.56-.44c-.44-.439-.44-1.146-.44-2.56zM20 11v6m-5 2v3m-6-3v3M4 11v6m6-13L8.5 2M14 4l1.5-2m-9 8h11" color="currentColor"></svg:path>`,
})
export class HugeiconsAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
