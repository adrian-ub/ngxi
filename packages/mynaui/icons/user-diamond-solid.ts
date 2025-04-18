import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiUserDiamondSolidIcon],svg[mynaui-user-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 7.5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5"></svg:path><svg:path d="M12 1.25a3.16 3.16 0 0 0-2.235.926L2.177 9.765a3.16 3.16 0 0 0 0 4.47l4.206 4.207C7.001 15.546 9.545 14.11 12 14.11s4.999 1.436 5.617 4.332l4.206-4.207a3.16 3.16 0 0 0 0-4.47l-7.588-7.588A3.16 3.16 0 0 0 12 1.25m-3.25 8a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"></svg:path><svg:path d="m16.253 19.805l-.002-.267C16.117 16.93 14.114 15.61 12 15.61s-4.117 1.32-4.251 3.928l-.002.267l2.018 2.018a3.16 3.16 0 0 0 4.47 0z"></svg:path></svg:g>`,
})
export class MynauiUserDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
