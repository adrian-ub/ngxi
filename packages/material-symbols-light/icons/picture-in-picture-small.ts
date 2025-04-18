import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPictureInPictureSmallIcon],svg[material-symbols-light-picture-in-picture-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19v-1h16.385q.23 0 .423-.192t.192-.424V5h1v12.385q0 .69-.462 1.153T19.385 19zm6.923-3.384V9.923h7.693v5.693z"></svg:path>`,
})
export class MaterialSymbolsLightPictureInPictureSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
