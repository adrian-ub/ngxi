import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackGhIcon],svg[flagpack-gh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#5EAA22" d="M0 16h32v8H0z"></svg:path><svg:path fill="#FECA00" d="M0 8h32v8H0z"></svg:path><svg:path fill="#E11C1B" d="M0 0h32v8H0z"></svg:path><svg:path fill="#1D1D1D" d="m16.075 14.49l-3.485 2.418l1.114-4.14l-2.944-2.646l3.85-.143l1.465-4.095l1.466 4.095h3.827l-2.92 2.788l1.278 3.897z"></svg:path></svg:g>`,
})
export class FlagpackGhIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
