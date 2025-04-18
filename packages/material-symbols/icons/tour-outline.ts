import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTourOutlineIcon],svg[material-symbols-tour-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22V2h2v2h14l-2 5l2 5H7v8zM7 6v6zm5.5 5q.825 0 1.413-.587T14.5 9t-.587-1.412T12.5 7t-1.412.588T10.5 9t.588 1.413T12.5 11M7 12h11.05l-1.2-3l1.2-3H7z"></svg:path>`,
})
export class MaterialSymbolsTourOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
