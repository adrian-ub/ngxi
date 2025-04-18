import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVideoOffIcon],svg[hugeicons-video-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.002 2l19.975 20m-5.125-5.132c-.13.938-.386 1.599-.892 2.107C14.936 20 13.288 20 9.992 20h-.999c-3.295 0-4.943 0-5.967-1.026C2.002 17.95 2.002 16.3 2.002 13v-2c0-3.3 0-4.95 1.024-5.975c.342-.343.755-.571 1.275-.723M8.236 4h1.755c3.296 0 4.944 0 5.968 1.025C16.982 6.05 16.982 7.7 16.982 11v1.757m0-3.526l2.32-1.702c1.47-.988 2.147-.357 2.366.12c.451 1.28.309 3.745.309 6.893c-.107 2.013-.382 2.23-.663 2.452l-.003.002" color="currentColor"></svg:path>`,
})
export class HugeiconsVideoOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
