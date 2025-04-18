import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDeleteSweepOutlineIcon],svg[material-symbols-light-delete-sweep-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.885 17.5v-1h3v1zm0-8v-1h6v1zm0 4v-1h5v1zM4.115 8h-1V7h3.731v-.885h2.538V7h3.732v1h-1v8.385q0 .69-.463 1.153T10.5 18H5.73q-.69 0-1.152-.462t-.462-1.153zm1 0v8.385q0 .23.193.423T5.73 17h4.77q.23 0 .423-.192q.193-.193.193-.424V8zm0 0v9z"></svg:path>`,
})
export class MaterialSymbolsLightDeleteSweepOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
