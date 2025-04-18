import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBoyIcon],svg[material-symbols-boy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.5q-.725 0-1.237-.513T10.25 5.75t.513-1.237T12 4t1.238.513t.512 1.237t-.513 1.238T12 7.5M10 20v-5H9v-4.5q0-.825.588-1.412T11 8.5h2q.825 0 1.413.588T15 10.5V15h-1v5z"></svg:path>`,
})
export class MaterialSymbolsBoyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
