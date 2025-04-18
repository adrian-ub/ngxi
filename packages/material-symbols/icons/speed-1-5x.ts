import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed15xIcon],svg[material-symbols-speed-1-5x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17v-2h2v2zm-3 0V9H1V7h4v10zm12.5 0l3-5l-3-5h2l2 3.325L21.5 7h2l-3 5l3 5h-2l-2-3.325l-2 3.325zM9 17v-2h3.5v-2H9V7h5.5v2H11v2h1.5q.825 0 1.413.588T14.5 13v2q0 .825-.587 1.413T12.5 17z"></svg:path>`,
})
export class MaterialSymbolsSpeed15xIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
