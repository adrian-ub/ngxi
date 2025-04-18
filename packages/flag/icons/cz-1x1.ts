import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagCz1x1Icon],svg[flag-cz-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M0 0h512v256H0z"></svg:path><svg:path fill="#d7141a" d="M0 256h512v256H0z"></svg:path><svg:path fill="#11457e" d="M300 256L0 56v400z"></svg:path>`,
})
export class FlagCz1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
