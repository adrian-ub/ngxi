import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFolderPlusBoldIcon],svg[ph-folder-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 68h-82.61l-26-29.29a20 20 0 0 0-15-6.71H40a20 20 0 0 0-20 20v148.62A19.41 19.41 0 0 0 39.38 220h177.51A19.13 19.13 0 0 0 236 200.89V88a20 20 0 0 0-20-20M90.61 56l10.67 12H44V56ZM212 196H44V92h168Zm-72-76v12h12a12 12 0 0 1 0 24h-12v12a12 12 0 0 1-24 0v-12h-12a12 12 0 0 1 0-24h12v-12a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhFolderPlusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
