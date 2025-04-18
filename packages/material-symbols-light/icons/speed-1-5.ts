import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpeed15Icon],svg[material-symbols-light-speed-1-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.73 16.5v-8h-2v-1h3v9zm2.77 0v-1h1v1zm2.77 0v-1h3.384q.269 0 .442-.173t.173-.442v-1.77q0-.269-.173-.442t-.442-.173h-3.385v-5h5v1h-4v3h2.385q.69 0 1.153.463t.462 1.153v1.769q0 .69-.462 1.153t-1.16.462z"></svg:path>`,
})
export class MaterialSymbolsLightSpeed15Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
