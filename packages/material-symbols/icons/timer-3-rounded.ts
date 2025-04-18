import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTimer3RoundedIcon],svg[material-symbols-timer-3-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 19H9.5q-.625 0-1.062-.437T8 17.5t.438-1.062T9.5 16H14v-2.5h-3.5q-.625 0-1.062-.437T9 12t.438-1.062T10.5 10.5H14V8H9.5q-.625 0-1.062-.437T8 6.5t.438-1.062T9.5 5H14q1.25 0 2.125.875T17 8v1.9q0 .875-.612 1.488T14.9 12q.875 0 1.488.613T17 14.1V16q0 1.25-.875 2.125T14 19"></svg:path>`,
})
export class MaterialSymbolsTimer3RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
