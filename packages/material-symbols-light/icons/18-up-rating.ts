import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight18UpRatingIcon],svg[material-symbols-light-18-up-rating-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.808 14.692h.884V9.308H7.308v.884h1.5zm3.769 0h2.346q.327 0 .548-.22q.221-.222.221-.549v-3.846q0-.327-.22-.548q-.222-.221-.549-.221h-2.346q-.327 0-.548.22q-.221.222-.221.549v3.846q0 .327.22.548q.222.221.549.221m.115-.769v-1.538h2.116v1.538zm0-2.307v-1.539h2.116v1.539zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z"></svg:path>`,
})
export class MaterialSymbolsLight18UpRatingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
