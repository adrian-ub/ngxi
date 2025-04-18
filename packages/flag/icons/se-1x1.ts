import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagSe1x1Icon],svg[flag-se-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#005293" d="M0 0h512v512H0z"></svg:path><svg:path fill="#fecb00" d="M134 0v204.8H0v102.4h134V512h102.4V307.2H512V204.8H236.4V0z"></svg:path>`,
})
export class FlagSe1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
