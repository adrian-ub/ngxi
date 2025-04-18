import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiNeg1Icon],svg[zmdi-neg-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 171h171v42H0zm320 149h-43V93l-64 22V79l101-36h6z"></svg:path>`,
})
export class ZmdiNeg1Icon {
  readonly viewBox = input("0 0 320 384")
  readonly width = input("0.84em")
  readonly height = input("1em")
}
