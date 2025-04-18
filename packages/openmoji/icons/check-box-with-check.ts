import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCheckBoxWithCheckIcon],svg[openmoji-check-box-with-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D0CFCE" stroke="#D0CFCE" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M45 29.077v21.241a.46.46 0 0 1-.46.46H22.46a.46.46 0 0 1-.46-.46v-22.08a.46.46 0 0 1 .46-.46H45z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M51.23 14.778c-15.23 18-18 30.462-18 30.462s-2.768-6.924-5.538-9.693"></svg:path><svg:path d="M45 29.077v21.241a.46.46 0 0 1-.46.46H22.46a.46.46 0 0 1-.46-.46v-22.08a.46.46 0 0 1 .46-.46h14.391"></svg:path></svg:g>`,
})
export class OpenmojiCheckBoxWithCheckIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
