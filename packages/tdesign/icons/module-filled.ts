import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignModuleFilledIcon],svg[tdesign-module-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2H2v20h9zm2 20h9v-9h-9zm9-11V2h-9v9z"></svg:path>`,
})
export class TdesignModuleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
