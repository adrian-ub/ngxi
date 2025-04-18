import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMan3RoundedIcon],svg[material-symbols-man-3-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 21.25v-6H9q-.425 0-.712-.288T8 14.25v-5q0-.825.588-1.412T10 7.25h4q.825 0 1.413.588T16 9.25v5q0 .425-.288.713T15 15.25h-1v6q0 .425-.288.713T13 22.25h-2q-.425 0-.712-.288T10 21.25M11.3 5.8l-.85-.85q-.3-.3-.3-.7t.3-.7l.85-.85q.3-.3.7-.3t.7.3l.85.85q.3.3.3.7t-.3.7l-.85.85q-.3.3-.7.3t-.7-.3"></svg:path>`,
})
export class MaterialSymbolsMan3RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
