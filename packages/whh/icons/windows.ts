import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhWindowsIcon],svg[whh-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 1024V576h448v448zM576 0h448v448H576zM0 576h448v448H0zM0 0h448v448H0z"></svg:path>`,
})
export class WhhWindowsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
