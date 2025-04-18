import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDirectionsRailway2RoundedIcon],svg[material-symbols-light-directions-railway-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.97 21q-.274 0-.37-.252t.096-.444l.843-.842h10.923l.842.842q.192.192.096.444t-.37.252zm1.338-2.308l.769-.769h-.25q-1.2 0-2.013-.842T5 15.038V8.192q0-2.84 2.024-4.516T12 2t4.976 1.676T19 8.192v6.847q0 1.2-.813 2.042t-2.014.842h-.25l.77.77zM12 15.346q.548 0 .928-.38t.38-.927t-.38-.928t-.928-.38t-.928.38t-.38.928t.38.927q.38.38.928.38m-6-5.192h12V8.192q0-.613-.122-1.158T17.518 6H6.482q-.239.489-.361 1.034T6 8.192z"></svg:path>`,
})
export class MaterialSymbolsLightDirectionsRailway2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
