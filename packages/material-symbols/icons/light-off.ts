import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOffIcon],svg[material-symbols-light-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m5.45-7.4L6.85 4.05q1.025-.95 2.338-1.5T12 2q3.125 0 5.313 2.188T19.5 9.5q0 1.775-.625 3.038T17.45 14.6m3.75 6.6l-1.425 1.425L13.15 16h-4.9q-1.725-1.025-2.738-2.75T4.5 9.5q0-.5.063-.975T4.75 7.6L1.4 4.2l1.4-1.4zM16.15 17v2H8v-2z"></svg:path>`,
})
export class MaterialSymbolsLightOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
