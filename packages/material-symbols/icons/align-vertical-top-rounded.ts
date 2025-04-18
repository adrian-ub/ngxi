import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAlignVerticalTopRoundedIcon],svg[material-symbols-align-vertical-top-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 22q-.625 0-1.062-.437T7 20.5v-13q0-.625.438-1.062T8.5 6t1.063.438T10 7.5v13q0 .625-.437 1.063T8.5 22m7-6q-.625 0-1.062-.437T14 14.5v-7q0-.625.438-1.062T15.5 6t1.063.438T17 7.5v7q0 .625-.437 1.063T15.5 16M3 4q-.425 0-.712-.288T2 3t.288-.712T3 2h18q.425 0 .713.288T22 3t-.288.713T21 4z"></svg:path>`,
})
export class MaterialSymbolsAlignVerticalTopRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
