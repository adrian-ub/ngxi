import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackSoIcon],svg[flagpack-so-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#56C6F5" d="M0 0h32v24H0z"></svg:path><svg:path fill="#F7FCFF" d="m16.179 14.717l-3.764 2.393l1.262-4.189l-2.684-2.737l3.701-.08l1.637-4.137l1.493 4.19l3.692.065l-2.775 2.788l1.296 3.985z"></svg:path></svg:g>`,
})
export class FlagpackSoIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
