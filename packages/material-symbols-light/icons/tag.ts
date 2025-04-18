import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTagIcon],svg[material-symbols-light-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.135 19.077l1-4H4.518l.25-1h3.616l1.038-4.154H5.808l.25-1h3.615l1-4h.962l-1 4h4.269l1-4h.962l-1 4h3.615l-.25 1h-3.616l-1.038 4.154h3.615l-.25 1h-3.615l-1 4h-.961l1-4h-4.27l-1 4zm2.211-5h4.27l1.038-4.154h-4.27z"></svg:path>`,
})
export class MaterialSymbolsLightTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
