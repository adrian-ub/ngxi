import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsEaselOutlineIcon],svg[famicons-easel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="416" height="272" x="48" y="80" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="32" ry="32"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 416v-64m0-272V48m144 416l-32-112M112 464l32-112"></svg:path>`,
})
export class FamiconsEaselOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
