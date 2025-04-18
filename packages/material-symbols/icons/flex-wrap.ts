import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlexWrapIcon],svg[material-symbols-flex-wrap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 22v-9h6v9zm8 0v-9h6v9zm8 0v-9h6v9zm-6-2h2v-5h-2zM1 11V2h6v9zm8 0V2h6v9zm8 0V2h6v9zM3 9h2V4H3zm16 0h2V4h-2z"></svg:path>`,
})
export class MaterialSymbolsFlexWrapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
