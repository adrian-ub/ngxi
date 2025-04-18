import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDeveloperBoardOffIcon],svg[material-symbols-developer-board-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.825 17L16 13.15V11h-2.15l-1.025-1H16V7h-4v2.175l-1-1V7H9.85L5.825 3H18q.825 0 1.413.588T20 5v2h2v2h-2v2h2v2h-2v2h2v2zM6 17h5v-4H6zM3.2 3.175l16.8 16.8q-.35.5-.875.763T18 21H4q-.825 0-1.412-.587T2 19V5q0-.625.338-1.112t.862-.713m8.8 8.8V17h4v-1.025zM7.025 7H6v5h5v-1.025zm13.45 16.3L.675 3.5L2.1 2.075l19.8 19.8z"></svg:path>`,
})
export class MaterialSymbolsDeveloperBoardOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
