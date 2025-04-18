import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixApplicationScreenIcon],svg[ix-application-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 106.667V384H64V106.667zm-42.667 106.667H106.667v128h298.666zm0-64H106.667v21.333h298.666z"></svg:path>`,
})
export class IxApplicationScreenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
