import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mingcuteJeepFillIcon],svg[mingcute-jeep-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path fill="currentColor" d="M12.868 5a3 3 0 0 1 2.572 1.457l2.167 3.611l2.641.33A2 2 0 0 1 22 12.383V15a3 3 0 0 1-2.128 2.872A3.001 3.001 0 0 1 14.17 18H9.829a3.001 3.001 0 0 1-5.7-.128A3 3 0 0 1 2 15v-3.807a2 2 0 0 1 .143-.743l1.426-3.564A3 3 0 0 1 6.354 5zM7 16a1 1 0 1 0 0 2a1 1 0 0 0 0-2m10 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-4.132-9H11v3h4.234l-1.509-2.514A1 1 0 0 0 12.868 7M9 7H6.354a1 1 0 0 0-.928.629L4.477 10H9z"></svg:path></svg:g>`,
})
export class MingcuteJeepFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
