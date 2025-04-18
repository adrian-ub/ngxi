import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosSendgridIconIcon],svg[logos-sendgrid-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9DD6E3" d="M256 0v170.667h-85.333v85.33H.002v-85.331H0V85.332h85.333V0z"></svg:path><svg:path fill="#3F72AB" d="M.002 255.996h85.333v-85.333H.002z"></svg:path><svg:path fill="#00A9D1" d="M170.667 170.667H256V85.331h-85.333zM85.333 85.333h85.334V0H85.333z"></svg:path><svg:path fill="#2191C4" d="M85.333 170.665h85.334V85.331H85.333z"></svg:path><svg:path fill="#3F72AB" d="M170.667 85.333H256V0h-85.333z"></svg:path>`,
})
export class LogosSendgridIconIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
