import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsGenstatIcon],svg[file-icons-genstat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h512v395.201c-170.667 16.732-228.671-316.7-328.347-316.7C99.747 78.501 67.705 266.416 0 288.674zm0 512h512v-84.822c-175.872 18.777-264.66-315.946-329.886-316.7c-57.925 0-89.678 189.848-182.114 210.173z"></svg:path>`,
})
export class FileIconsGenstatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
