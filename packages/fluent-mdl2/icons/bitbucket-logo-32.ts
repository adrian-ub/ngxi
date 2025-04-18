import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BitbucketLogo32Icon],svg[fluent-mdl2-bitbucket-logo-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1981 64q28 0 47 19t20 47q0 7-1 11l-278 1723q-4 25-22 40t-44 16H367q-32 0-57-21t-31-54L1 141q-1-4-1-12q0-28 19-46t48-19zm-638 624H697l116 608h426z"></svg:path>`,
})
export class FluentMdl2BitbucketLogo32Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
