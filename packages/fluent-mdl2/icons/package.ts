import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PackageIcon],svg[fluent-mdl2-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 768h-128v1152H128V768H0V128h2048zm-256 0H256v1024h1536zm128-512H128v384h1792zm-896 1152H384v-128h640zm-640 256v-128h512v128z"></svg:path>`,
})
export class FluentMdl2PackageIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
