import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCardTravelIcon],svg[material-symbols-light-card-travel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7V5.384q0-.67.472-1.143q.472-.472 1.144-.472h4.768q.672 0 1.144.472q.472.473.472 1.144V7h3.385q.67 0 1.143.472q.472.472.472 1.144v9.769q0 .67-.472 1.143q-.472.472-1.143.472H4.615q-.67 0-1.143-.472Q3 19.056 3 18.385v-9.77q0-.67.472-1.143Q3.944 7 4.616 7zm1 0h6V5.384q0-.269-.173-.442t-.442-.173h-4.77q-.269 0-.442.173Q9 5.116 9 5.385zm-5 9.577h16v-2.154H4z"></svg:path>`,
})
export class MaterialSymbolsLightCardTravelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
