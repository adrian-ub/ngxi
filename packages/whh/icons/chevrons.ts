import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhChevronsIcon],svg[whh-chevrons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M736 1024H576l288-512L576 0h160l288 512zm-448 0L0 512L288 0h160L160 512l288 512z"></svg:path>`,
})
export class WhhChevronsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
