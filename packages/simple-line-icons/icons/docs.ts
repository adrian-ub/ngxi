import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleLineIconsDocsIcon],svg[simple-line-icons-docs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 0H416c-35.344 0-64 28.656-64 64h352v256h256v512H736v64h224c35.344 0 64-28.656 64-64V256.016zm0 256V90.496L933.472 256zM64 128c-35.344 0-64 28.656-64 64v768c0 35.344 28.656 64 64 64h544c35.344 0 64-28.656 64-64V384.016L416 128zm544 832H64V192h288v256h256zM416 384V218.496L581.472 384z"></svg:path>`,
})
export class SimpleLineIconsDocsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
