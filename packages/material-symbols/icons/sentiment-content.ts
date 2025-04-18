import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSentimentContentIcon],svg[material-symbols-sentiment-content-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 15.5h6V14H9zm3 6.5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22M8.5 8.5q-.8 0-1.487.45T5.875 10.1l1.25.825q.25-.375.6-.638t.775-.262t.775.263t.6.612l1.25-.825q-.45-.675-1.137-1.125T8.5 8.5m7 0q-.8 0-1.487.45t-1.138 1.15l1.25.825q.25-.35.6-.612t.775-.263t.788.25t.587.625l1.25-.825q-.45-.7-1.137-1.15T15.5 8.5"></svg:path>`,
})
export class MaterialSymbolsSentimentContentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
