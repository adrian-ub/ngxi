import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGastroenterologyRoundedIcon],svg[material-symbols-light-gastroenterology-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.789 21.5q-.348 0-.578-.23t-.23-.578V16q0-1.038.73-1.77t1.77-.73h2q1.461 0 2.48-1.02t1.02-2.48q0-.617-.441-1.059q-.442-.441-1.06-.441q-.632 0-1.065-.434Q8.98 7.633 8.98 7V3.308q0-.348.23-.578t.577-.23h2.404q.348 0 .578.23t.23.578v.25q0 .384.279.663t.663.279q2.599 0 4.328 1.922T20 11v1q0 2.714-1.893 4.607T13.5 18.5h-4q-.617 0-1.059.441Q8 19.383 8 20v.692q0 .349-.23.578t-.578.23z"></svg:path>`,
})
export class MaterialSymbolsLightGastroenterologyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
