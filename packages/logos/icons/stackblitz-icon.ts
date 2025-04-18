import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosStackblitzIconIcon],svg[logos-stackblitz-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#49A2F8" d="M109.586 217.013H0L200.34 0l-53.926 150.233H256L55.645 367.246l53.927-150.233z"></svg:path>`,
})
export class LogosStackblitzIconIcon {
  readonly viewBox = input("0 0 256 368")
  readonly width = input("0.7em")
  readonly height = input("1em")
}
