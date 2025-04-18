import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibDocusignIcon],svg[cib-docusign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.688 4.411h6.625v8.828h4.411L16 22.067l-7.724-8.828h4.411zM0 25.38h32v2.203H0z"></svg:path>`,
})
export class CibDocusignIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
