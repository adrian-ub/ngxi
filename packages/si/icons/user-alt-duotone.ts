import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siUserAltDuotoneIcon],svg[si-user-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M20.4 22H3.6c-.88 0-1.6-.72-1.6-1.6v-4.65c0-.25 0-.38.12-.62c.38-.88 1.5-1.62 3.25-2.25c1.25 2.38 3.75 4 6.62 4s5.38-1.62 6.62-4c1.75.62 2.88 1.38 3.25 2.25c.12.12.12.38.12.62v4.65c0 .88-.72 1.6-1.6 1.6z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.4 22H3.6c-.88 0-1.6-.72-1.6-1.6v-4.65c0-.25 0-.38.12-.62c.38-.88 1.5-1.62 3.25-2.25c1.25 2.38 3.75 4 6.62 4s5.38-1.62 6.62-4c1.75.62 2.88 1.38 3.25 2.25c.12.12.12.38.12.62v4.65c0 .88-.72 1.6-1.6 1.6z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 13.5c-2.75 0-5-2.25-5-5V7c0-2.75 2.25-5 5-5s5 2.25 5 5v1.5c0 2.75-2.25 5-5 5"></svg:path></svg:g>`,
})
export class SiUserAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
