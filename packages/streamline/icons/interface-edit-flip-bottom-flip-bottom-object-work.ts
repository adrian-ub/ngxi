import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipBottomFlipBottomObjectWorkIcon],svg[streamline-interface-edit-flip-bottom-flip-bottom-object-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7h13a6.5 6.5 0 0 1-13 0ZM13 4.39a6.13 6.13 0 0 0-.76-1.3a6.34 6.34 0 0 0-1-1.09M1.05 4.39a6.13 6.13 0 0 1 .76-1.3A6.34 6.34 0 0 1 2.85 2M8.5.67a6.7 6.7 0 0 0-3 0"></svg:path>`,
})
export class StreamlineInterfaceEditFlipBottomFlipBottomObjectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
