import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFormatListBulletedRoundedIcon],svg[material-symbols-format-list-bulleted-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 19q-.425 0-.712-.288T9 18t.288-.712T10 17h10q.425 0 .713.288T21 18t-.288.713T20 19zm0-6q-.425 0-.712-.288T9 12t.288-.712T10 11h10q.425 0 .713.288T21 12t-.288.713T20 13zm0-6q-.425 0-.712-.288T9 6t.288-.712T10 5h10q.425 0 .713.288T21 6t-.288.713T20 7zM5 20q-.825 0-1.412-.587T3 18t.588-1.412T5 16t1.413.588T7 18t-.587 1.413T5 20m0-6q-.825 0-1.412-.587T3 12t.588-1.412T5 10t1.413.588T7 12t-.587 1.413T5 14m0-6q-.825 0-1.412-.587T3 6t.588-1.412T5 4t1.413.588T7 6t-.587 1.413T5 8"></svg:path>`,
})
export class MaterialSymbolsFormatListBulletedRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
