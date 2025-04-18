import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBrickRoundedIcon],svg[material-symbols-brick-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18.5v-9q0-.625.438-1.062T3.5 8H5V5.5q0-.625.438-1.062T6.5 4h3q.625 0 1.063.438T11 5.5V8h2V5.5q0-.625.438-1.062T14.5 4h3q.625 0 1.063.438T19 5.5V8h1.5q.625 0 1.063.438T22 9.5v9q0 .625-.437 1.063T20.5 20h-17q-.625 0-1.062-.437T2 18.5"></svg:path>`,
})
export class MaterialSymbolsBrickRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
