import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFertileRoundedIcon],svg[material-symbols-fertile-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.325 3.5q.725.85 1.375 1.725t1.25 1.8L20.4 3.7q.225-.175.5-.2t.55.1t.413.375T22 4.5V12q0 2.075-.787 3.9t-2.138 3.175t-3.175 2.138T12 22t-3.9-.788t-3.175-2.137T2.788 15.9T2 12V4.5q0-.275.138-.525T2.55 3.6t.55-.1t.5.2l4.425 3.325q.6-.925 1.263-1.8T10.675 3.5q.25-.3.6-.462T12 2.875t.725.163t.6.462"></svg:path>`,
})
export class MaterialSymbolsFertileRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
