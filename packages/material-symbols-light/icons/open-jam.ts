import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOpenJamIcon],svg[material-symbols-light-open-jam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 19.77v-1h5.5v-8.547l2.1 2.1l.708-.707L12 8.308l-3.308 3.308l.708.707l2.1-2.1V15H4.616q-.691 0-1.153-.462T3 13.385v-7.77q0-.69.463-1.152T4.615 4h14.77q.69 0 1.152.463T21 5.616v7.769q0 .69-.463 1.153T19.385 15H13.5v3.77H17v1z"></svg:path>`,
})
export class MaterialSymbolsLightOpenJamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
