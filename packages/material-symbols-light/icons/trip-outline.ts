import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTripOutlineIcon],svg[material-symbols-light-trip-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 20q-.672 0-1.144-.472T3 18.385v-9.77q0-.67.472-1.143Q3.944 7 4.616 7H9V5.615q0-.67.472-1.143Q9.944 4 10.616 4h2.769q.67 0 1.143.472q.472.472.472 1.143V7h4.385q.67 0 1.143.472q.472.472.472 1.144v9.769q0 .67-.472 1.143q-.472.472-1.143.472zM10 7h4V5.615q0-.23-.192-.423T13.385 5h-2.77q-.23 0-.423.192T10 5.615zM7 8H4.616q-.231 0-.424.192T4 8.616v9.769q0 .23.192.423t.423.192H7zm9 11V8H8v11zm1-11v11h2.385q.23 0 .423-.192t.192-.424V8.616q0-.231-.192-.424T19.385 8zm-5 5.5"></svg:path>`,
})
export class MaterialSymbolsLightTripOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
