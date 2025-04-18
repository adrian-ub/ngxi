import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwaySubtraction1Icon],svg[subway-subtraction-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 229.3h512v85.3H1z"></svg:path>`,
})
export class SubwaySubtraction1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
