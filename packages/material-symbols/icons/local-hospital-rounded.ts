import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalHospitalRoundedIcon],svg[material-symbols-local-hospital-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 13.5v2q0 .625.438 1.063T12 17t1.063-.437t.437-1.063v-2h2q.625 0 1.063-.437T17 12t-.437-1.062T15.5 10.5h-2v-2q0-.625-.437-1.062T12 7t-1.062.438T10.5 8.5v2h-2q-.625 0-1.062.438T7 12t.438 1.063T8.5 13.5zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsLocalHospitalRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
