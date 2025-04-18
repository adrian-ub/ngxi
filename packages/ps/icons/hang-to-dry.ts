import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psHangToDryIcon],svg[ps-hang-to-dry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M423 21Q412 0 387 0H45Q20 0 9 21H3v448q0 18 12.5 30.5T45 512h342q17 0 29.5-12.5T429 469V21zm-41 22q-13 37-59.5 61T216 128q-61 0-108-24T50 43zM45 469V111q65 60 171 60t171-60v358z"></svg:path>`,
})
export class PsHangToDryIcon {
  readonly viewBox = input("0 0 432 512")
  readonly width = input("0.85em")
  readonly height = input("1em")
}
