import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiAnalyzeEventIcon],svg[oui-analyze-event-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.924 4.013a.6.6 0 0 0-.228-.236L7.304.082a.61.61 0 0 0-.608 0L.304 3.777A.62.62 0 0 0 0 4.304v7.392a.61.61 0 0 0 .304.527l6.392 3.695c.188.11.42.11.608 0l6.392-3.695a.61.61 0 0 0 .304-.527V4.304a.6.6 0 0 0-.076-.291M1 5.079v6.391l6 3.47l6-3.47V5.08L7.252 8.432L7 8.579l-.252-.147zm11.476-.852L7 1.06L1.524 4.227L7 7.42z"></svg:path>`,
})
export class OuiAnalyzeEventIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
