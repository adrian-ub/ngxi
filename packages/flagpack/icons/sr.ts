import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackSrIcon],svg[flagpack-sr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#4E8B1D" fill-rule="evenodd" d="M0 16h32v8H0zM0 0h32v6H0z" clip-rule="evenodd"></svg:path><svg:path fill="#AF0100" stroke="#fff" stroke-width="3" d="M0 6.5h-1.5v11h35v-11z"></svg:path><svg:path fill="#FECA00" fill-rule="evenodd" d="M16.002 14.494L13.508 16l.57-2.938l-2.078-2.2l2.813-.118L16.003 8l1.19 2.744H20l-2.072 2.318l.624 2.938z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class FlagpackSrIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
