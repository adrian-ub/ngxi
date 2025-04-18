import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBookmarkSlashSolidIcon],svg[mynaui-bookmark-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.53 2.47a.75.75 0 0 1 0 1.06l-2.78 2.78v13.642c0 1.352-1.469 2.308-2.686 1.518l-3.944-2.56a.21.21 0 0 0-.238 0l-3.946 2.56c-1.217.79-2.686-.165-2.686-1.518v-.141l-1.72 1.72a.75.75 0 0 1-1.06-1.061l2.78-2.78V3.941c0-.766.521-1.692 1.5-1.692h10.5c.979 0 1.5.926 1.5 1.692v.247l1.72-1.72a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class MynauiBookmarkSlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
