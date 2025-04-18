import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiViewModuleIcon],svg[zmdi-view-module-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 171V43h107v128zm0 149V192h107v128zm128 0V192h107v128zm128 0V192h107v128zM128 171V43h107v128zM256 43h107v128H256z"></svg:path>`,
})
export class ZmdiViewModuleIcon {
  readonly viewBox = input("0 0 368 384")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
