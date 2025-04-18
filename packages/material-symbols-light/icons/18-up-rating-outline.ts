import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight18UpRatingOutlineIcon],svg[material-symbols-light-18-up-rating-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.808 14.692h.884V9.308H7.308v.884h1.5zm3.769 0h2.346q.329 0 .549-.22t.22-.549v-3.846q0-.329-.22-.549t-.549-.22h-2.346q-.329 0-.549.22t-.22.549v3.846q0 .329.22.549t.549.22m.115-.769v-1.538h2.116v1.538zm0-2.307v-1.539h2.116v1.539zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm0-1h12.769q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192M5 5v14z"></svg:path>`,
})
export class MaterialSymbolsLight18UpRatingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
