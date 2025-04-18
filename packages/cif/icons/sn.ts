import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifSnIcon],svg[cif-sn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00853F" d="M.5.5h100v200H.5z"></svg:path><svg:path fill="#FDEF42" d="M100.5.5h100v200h-100z"></svg:path><svg:path fill="#E31B23" d="M200.5.5h100v200h-100z"></svg:path><svg:path fill="#00853F" d="m118.798 90.199l19.593 14.235l-7.484 23.033l19.593-14.235l19.593 14.235l-7.484-23.033l19.593-14.235h-24.218L150.5 67.166l-7.484 23.033z"></svg:path></svg:g>`,
})
export class CifSnIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
