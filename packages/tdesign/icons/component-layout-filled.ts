import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignComponentLayoutFilledIcon],svg[tdesign-component-layout-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2H2v9h9zM2 13v9h9v-9zm11 9h9V2h-9z"></svg:path>`,
})
export class TdesignComponentLayoutFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
