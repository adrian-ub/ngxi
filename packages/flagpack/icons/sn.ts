import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackSnIcon],svg[flagpack-sn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#FBCD17" d="M10 0h12v24H10z"></svg:path><svg:path fill="#006923" d="m16.075 14.49l-3.485 2.418l1.114-4.14l-2.56-2.79h3.466l1.465-4.094l1.466 4.095h3.46l-2.554 2.788l1.279 3.897z"></svg:path><svg:path fill="#E11C1B" d="M22 0h10v24H22z"></svg:path><svg:path fill="#006923" d="M0 0h10v24H0z"></svg:path></svg:g>`,
})
export class FlagpackSnIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
