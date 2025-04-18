import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipLeftFlipLeftObjectWorkIcon],svg[streamline-interface-edit-flip-left-flip-left-object-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5V.5a6.5 6.5 0 0 0 0 13ZM9.61 1.05a6.13 6.13 0 0 1 1.3.76a6.34 6.34 0 0 1 1.09 1M9.61 13a6.13 6.13 0 0 0 1.3-.76a6.34 6.34 0 0 0 1.09-1m1.33-5.74a6.7 6.7 0 0 1 0 3"></svg:path>`,
})
export class StreamlineInterfaceEditFlipLeftFlipLeftObjectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
