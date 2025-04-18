import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageGlobeFillIcon],svg[mage-globe-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.478 21.439a10.1 10.1 0 0 1-6.504-8.573h4.32a17.54 17.54 0 0 0 2.184 8.573m7.505-8.573c-.182 5.465-2.174 9.208-3.973 9.208c-1.8 0-3.791-3.743-3.974-9.208zm6.043 0a10.06 10.06 0 0 1-6.514 8.573a17.43 17.43 0 0 0 2.194-8.573zm0-1.732h-4.32c.02-3-.735-5.952-2.194-8.573a10.05 10.05 0 0 1 6.514 8.573m-6.043 0H8.036c.183-5.475 2.174-9.208 3.974-9.208c1.799 0 3.781 3.733 3.973 9.208M8.478 2.61a17.5 17.5 0 0 0-2.184 8.572h-4.32A10.07 10.07 0 0 1 8.478 2.61"></svg:path>`,
})
export class MageGlobeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
