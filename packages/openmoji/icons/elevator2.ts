import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiElevator2Icon],svg[openmoji-elevator2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D0CFCE" d="M22 19h28v34H22z"></svg:path><svg:path fill="#FFF" d="M29 53l19-34H22v34z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M22 19h28v34H22z"></svg:path><svg:path d="M16 61V11"></svg:path><svg:path d="M36 49V23"></svg:path><svg:path d="M56 61V11"></svg:path></svg:g>`,
})
export class OpenmojiElevator2Icon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
