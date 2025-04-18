import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayFile3Icon],svg[subway-file-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M302.2 0H67.5v512h384V149.3H302.2zm64 320v42.7h-85.3V448h-42.7v-85.3h-85.3V320h85.3v-85.3h42.7V320zM323.5 0v128h128z"></svg:path>`,
})
export class SubwayFile3Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
