import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbols7kOutlineIcon],svg[material-symbols-7k-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15h1.5v-2.25L16.25 15h1.825l-2.325-3l2.325-3H16.25l-1.75 2.25V9H13zm-5.25 0H9.5l1.45-4.7q.15-.5-.15-.9T10 9H6.5v1.5h2.65zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z"></svg:path>`,
})
export class MaterialSymbols7kOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
