import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDeveloperBoardOffSharpIcon],svg[material-symbols-developer-board-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.825 17L16 13.15V11h-2.15l-1.025-1H16V7h-4v2.175l-1-1V7H9.85L5.825 3H20v4h2v2h-2v2h2v2h-2v2h2v2zM6 17h5v-4H6zM3.2 3.175l16.8 16.8V21H2V3.175zm8.8 8.8V17h4v-1.025zM7.025 7H6v5h5v-1.025zm13.45 16.3L.675 3.5L2.1 2.075l19.8 19.8z"></svg:path>`,
})
export class MaterialSymbolsDeveloperBoardOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
