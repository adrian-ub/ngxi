import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemApplicationIcon],svg[tdesign-system-application-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v9H2v-9zm-2 2H4v5h16zm2-13v9H2V2zm-2 2H4v5h16zM7.504 16.5v2.004H5.5V16.5zm0-11v2.004H5.5V5.5z"></svg:path><svg:path fill="currentColor" d="M11.504 7.504V5.5H9.5v2.004zm0 11V16.5H9.5v2.004z"></svg:path>`,
})
export class TdesignSystemApplicationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
