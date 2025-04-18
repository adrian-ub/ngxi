import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipTopFlipTopObjectWorkIcon],svg[streamline-interface-edit-flip-top-flip-top-object-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 7H.5a6.5 6.5 0 0 1 13 0ZM1.05 9.61a6.13 6.13 0 0 0 .76 1.3a6.34 6.34 0 0 0 1 1.09M13 9.61a6.13 6.13 0 0 1-.76 1.3a6.34 6.34 0 0 1-1 1.09M5.5 13.33a6.7 6.7 0 0 0 3 0"></svg:path>`,
})
export class StreamlineInterfaceEditFlipTopFlipTopObjectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
