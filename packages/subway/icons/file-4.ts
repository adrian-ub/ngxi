import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayFile4Icon],svg[subway-file-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M305.7 0H71v512h384V149.3H305.7zm64 320v42.7H156.3V320zM327 0v128h128z"></svg:path>`,
})
export class SubwayFile4Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
