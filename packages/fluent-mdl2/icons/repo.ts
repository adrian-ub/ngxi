import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2RepoIcon],svg[fluent-mdl2-repo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 768h-128v1152H128V768H0V128h2048zm-256 0h-512v768l-256-128l-256 128V768H256v1024h1536zm-896 561q32-16 64-31t64-33q32 17 64 32t64 32V768H896zM1920 256H128v384h1792z"></svg:path>`,
})
export class FluentMdl2RepoIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
