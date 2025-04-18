import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSmartCardReaderOffIcon],svg[material-symbols-light-smart-card-reader-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.11 21.27l-1.531-1.531H3v-1.77q0-.671.472-1.143t1.144-.472h11.578l-1.884-1.885H5.826V5.981L1.892 2.046L2.6 1.34l19.223 19.217zM7.442 1.738h9.116q.69 0 1.153.462t.462 1.153v10.635h-.161l-3.721-3.766q.459-.142.748-.51t.288-.865q0-.594-.424-1.015t-1.018-.421q-.477 0-.855.288q-.378.289-.52.729L6.327 2.183q.217-.21.499-.327t.616-.117m.77 10.453h.555q.577 0 .983-.435t.616-1.238L8.212 8.365z"></svg:path>`,
})
export class MaterialSymbolsLightSmartCardReaderOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
