import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psBarCodeIcon],svg[ps-bar-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h43v427H0zm171 427V0H85v427zM213 0h43v427h-43zm86 0h42v427h-42zM0 469h512v43H0zM469 0h-42v427h85V0z"></svg:path>`,
})
export class PsBarCodeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
