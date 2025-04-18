import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBook6Icon],svg[material-symbols-light-book-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.23 21q-.922 0-1.576-.644Q4 19.71 4 18.808V5.23q0-.923.654-1.577T6.23 3h10.385v14.616H6.23q-.502 0-.866.345q-.365.345-.365.847q0 .501.365.847q.364.345.866.345H19V5h1v16zm1.155-7.73H8.2l.592-1.59h3.056l.587 1.59h.796l-2.452-6.54h-.923zm1.68-2.34l1.256-3.36h.012l1.236 3.36z"></svg:path>`,
})
export class MaterialSymbolsLightBook6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
