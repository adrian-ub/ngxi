import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAlignVerticalBottomRoundedIcon],svg[material-symbols-align-vertical-bottom-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22q-.425 0-.712-.288T2 21t.288-.712T3 20h18q.425 0 .713.288T22 21t-.288.713T21 22zm5.5-4q-.625 0-1.062-.437T7 16.5v-13q0-.625.438-1.062T8.5 2t1.063.438T10 3.5v13q0 .625-.437 1.063T8.5 18m7 0q-.625 0-1.062-.437T14 16.5v-7q0-.625.438-1.062T15.5 8t1.063.438T17 9.5v7q0 .625-.437 1.063T15.5 18"></svg:path>`,
})
export class MaterialSymbolsAlignVerticalBottomRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
