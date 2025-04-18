import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7LogoWindowsIcon],svg[f7-logo-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 11.533l18.799-2.56l.008 18.133l-18.79.107zm18.79 17.662l.014 18.149l-18.79-2.584V29.073zm2.279-20.557L50.994 5v21.875l-24.925.198zM51 29.366l-.006 21.776l-24.925-3.518l-.035-18.3z"></svg:path>`,
})
export class F7LogoWindowsIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
