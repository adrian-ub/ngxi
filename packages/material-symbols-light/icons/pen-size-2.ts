import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPenSize2Icon],svg[material-symbols-light-pen-size-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.512 18.489q-.198-.199-.198-.493t.198-.484l12.019-12q.198-.204.466-.214q.269-.01.488.21q.202.201.202.496t-.199.484l-12 12q-.19.198-.484.198t-.493-.198"></svg:path>`,
})
export class MaterialSymbolsLightPenSize2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
