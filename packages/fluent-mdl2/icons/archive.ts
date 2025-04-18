import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ArchiveIcon],svg[fluent-mdl2-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 128v640h-128v1152H128V768H0V128zm-256 1664V768H256v1024zm128-1152V256H128v384zm-512 512H640v-128h768z"></svg:path>`,
})
export class FluentMdl2ArchiveIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
