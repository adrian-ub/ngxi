import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsLockOffIcon],svg[majesticons-lock-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M7 7.828V9H6a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12c.872 0 1.657-.372 2.205-.966l-7.223-7.223A1 1 0 0 1 13 14v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1.19-.982zm14 8.344V12a3 3 0 0 0-3-3h-1V7a5 5 0 0 0-8.62-3.449l1.415 1.415A3 3 0 0 1 15 7v2h-1.172z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 3l18 18"></svg:path></svg:g>`,
})
export class MajesticonsLockOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
