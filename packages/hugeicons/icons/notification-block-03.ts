import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNotificationBlock03Icon],svg[hugeicons-notification-block-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 2.411A7.7 7.7 0 0 0 11.5 2C7.344 2 3.975 5.26 3.975 9.28c0 1.04-.062 2.018-.69 2.914c-.478.676-1.124 1.368-1.255 2.2c-.213 1.353.738 2.292 1.902 2.76c4.463 1.795 10.673 1.795 15.136 0c1.164-.468 2.115-1.407 1.902-2.76c-.08-.507-.351-.963-.66-1.394"></svg:path><svg:path d="m15.05 5.05l4.9 4.9M21 7.5a3.5 3.5 0 1 0-7 0a3.5 3.5 0 0 0 7 0M8.5 21c.796.622 1.848 1 3 1s2.204-.378 3-1"></svg:path></svg:g>`,
})
export class HugeiconsNotificationBlock03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
