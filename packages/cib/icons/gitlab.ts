import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibGitlabIcon],svg[cib-gitlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m31.937 18.115l-1.787-5.511l-3.552-10.921a.607.607 0 0 0-1.156 0L21.89 12.599H10.109L6.557 1.683c-.183-.563-.979-.563-1.156 0L1.849 12.599L.057 18.115c-.161.5.021 1.052.443 1.364L16 30.74l15.5-11.261c.421-.312.604-.859.437-1.364"></svg:path>`,
})
export class CibGitlabIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
