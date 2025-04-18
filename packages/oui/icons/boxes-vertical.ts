import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiBoxesVerticalIcon],svg[oui-boxes-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1v2h2V1zM6 0h4v4H6zm0 6h4v4H6zm1 1v2h2V7zm-1 5h4v4H6zm1 1v2h2v-2z"></svg:path>`,
})
export class OuiBoxesVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
