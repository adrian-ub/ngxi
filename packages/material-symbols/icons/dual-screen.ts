import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDualScreenIcon],svg[material-symbols-dual-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 19.45q-.575-.225-.913-.725T4 17.6V4q0-1.05.875-1.638T6.75 2.15l5.95 2.375q.575.225.938.738T14 6.4V20q0 1.05-.875 1.65t-1.875.2zM16 19V6.4q0-1.675-1.35-2.713T11.675 2H18q.825 0 1.413.588T20 4v13q0 .825-.587 1.413T18 19z"></svg:path>`,
})
export class MaterialSymbolsDualScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
