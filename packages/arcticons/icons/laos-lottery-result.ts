import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLaosLotteryResultIcon],svg[arcticons-laos-lottery-result-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.295 16.982c2.327.515 3.795 2.785 3.291 5.09l-.925 4.24c-.504 2.305-2.783 3.746-5.111 3.23c-2.328-.514-3.796-2.785-3.293-5.09l.927-4.239c.504-2.305 2.783-3.746 5.11-3.231m2.883 2.189l-8.522 8.18m-7.42-11.465l3.545-1.008l-2.744 12.56"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="21.93" cy="22.289" r="13.176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsLaosLotteryResultIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
