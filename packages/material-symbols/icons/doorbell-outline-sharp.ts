import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDoorbellOutlineSharpIcon],svg[material-symbols-doorbell-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17.5q.425 0 .713-.288T13 16.5h-2q0 .425.288.713T12 17.5M8 16h8v-1h-1v-2.35q0-1.1-.6-2T12.75 9.5v-1h-1.5v1q-1.05.25-1.65 1.15t-.6 2V15H8zm-4 5V9l8-6l8 6v12zm2-2h12v-9l-6-4.5L6 10zm6-6.75"></svg:path>`,
})
export class MaterialSymbolsDoorbellOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
