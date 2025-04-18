import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagPe1x1Icon],svg[flag-pe-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D91023" d="M0 0h512v512H0z"></svg:path><svg:path fill="#fff" d="M170.7 0h170.6v512H170.7z"></svg:path>`,
})
export class FlagPe1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
