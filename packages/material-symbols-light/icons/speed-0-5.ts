import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpeed05Icon],svg[material-symbols-light-speed-0-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 16.5v-1h1v1zm2.5 0v-1h3.385q.269 0 .442-.173t.173-.442v-1.77q0-.269-.173-.442t-.442-.173H10.25v-5h5v1h-4v3h2.385q.69 0 1.152.463t.463 1.153v1.769q0 .69-.462 1.153t-1.153.462z"></svg:path>`,
})
export class MaterialSymbolsLightSpeed05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
