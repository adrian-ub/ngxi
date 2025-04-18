import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNestHelloDoorbellIcon],svg[material-symbols-nest-hello-doorbell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.075 0-3.537-1.463T7 17V7q0-2.075 1.463-3.537T12 2t3.538 1.463T17 7v10q0 2.075-1.463 3.538T12 22m0-12q.825 0 1.413-.587T14 8t-.587-1.412T12 6t-1.412.588T10 8t.588 1.413T12 10m0 8q.825 0 1.413-.587T14 16t-.587-1.412T12 14t-1.412.588T10 16t.588 1.413T12 18m0-1q-.425 0-.712-.288T11 16t.288-.712T12 15t.713.288T13 16t-.288.713T12 17"></svg:path>`,
})
export class MaterialSymbolsNestHelloDoorbellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
