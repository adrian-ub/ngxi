import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhZurmoIcon],svg[whh-zurmo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 896v128L320 896H0V768h640v128zM0 576l384-448H0V0h640v128L256 576h384v128H0z"></svg:path>`,
})
export class WhhZurmoIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
