import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSmartphoneCameraIcon],svg[material-symbols-smartphone-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v3H7v12h12v3q0 .825-.587 1.413T17 23zm7.5-7q-.625 0-1.062-.437T13 14.5v-4q0-.625.438-1.062T14.5 9h1l1-1h2l1 1h1q.625 0 1.063.438T22 10.5v4q0 .625-.437 1.063T20.5 16zm3-1.75q.725 0 1.238-.513t.512-1.237t-.513-1.237t-1.237-.513t-1.237.513t-.513 1.237t.513 1.238t1.237.512"></svg:path>`,
})
export class MaterialSymbolsSmartphoneCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
