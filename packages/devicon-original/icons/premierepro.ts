import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalPremiereproIcon],svg[devicon-original-premierepro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2A0634" d="M0 0h128v128H0z"></svg:path><svg:path fill="#E976B9" d="M0 0v128h128V0H0zm123 123H5V5h118v118z"></svg:path><svg:path fill="#E976B9" d="M69 47.1c-.1-9.4-7.8-16.9-17.2-16.8H33.3v58.5h9.6V67.5h8.3C61 67.4 69 59.3 69 49.4v-2.3zm-9.6 3c0 5-4.1 9.1-9.1 9.1h-7.4V38.5h7.4c5 0 9.1 4.1 9.1 9.1v2.5zm17.7 38.7V48.9s10.2-5.1 20.2-3.8v8.3s-7 0-10.1 1.3v34.2H77.1z"></svg:path>`,
})
export class DeviconOriginalPremiereproIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
