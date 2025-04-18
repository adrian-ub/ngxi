import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconVipFilledIcon],svg[lsicon-vip-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.227 2H4.773L.827 6.51L8 14.235l7.173-7.725zM4.374 5.668l-.748.664L8 11.252l4.374-4.92l-.748-.664L8 9.748z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconVipFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
