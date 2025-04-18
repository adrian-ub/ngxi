import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTitleRoundedIcon],svg[material-symbols-title-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 7h-4q-.625 0-1.062-.437T5 5.5t.438-1.062T6.5 4h11q.625 0 1.063.438T19 5.5t-.437 1.063T17.5 7h-4v11.5q0 .625-.437 1.063T12 20t-1.062-.437T10.5 18.5z"></svg:path>`,
})
export class MaterialSymbolsTitleRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
