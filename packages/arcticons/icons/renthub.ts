import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRenthubIcon],svg[arcticons-renthub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.02 10.54v22.037m0 0v8.247c0 .949-.174 1.91.483 2.4c.78.584 1.843.115 2.92-.246l21.297-7.129c.505-.169 1.001-.496 1.19-1.059s.102-1.495-.394-1.93l-7.301-6.392zm18.196-6.11L11.02 10.54l16.262-5.41c8.771-2.92 10.06 4.886 9.053 11.737c-.562 3.83-3.573 6.805-7.12 9.602z"></svg:path>`,
})
export class ArcticonsRenthubIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
