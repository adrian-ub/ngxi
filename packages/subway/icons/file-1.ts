import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayFile1Icon],svg[subway-file-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M330 0v128h128zm-21.3 0H74v512h384V149.3H308.7zm64 320h-64v128h-85.3V320h-64L266 213.3z"></svg:path>`,
})
export class SubwayFile1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
