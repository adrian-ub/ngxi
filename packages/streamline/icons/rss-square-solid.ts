import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineRssSquareSolidIcon],svg[streamline-rss-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 0A1.5 1.5 0 0 0 0 1.5v11A1.5 1.5 0 0 0 1.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 12.5 0zm1.457 9.96a1.084 1.084 0 1 1 2.167 0a1.084 1.084 0 0 1-2.167 0m.459-3.502c0-.346.28-.625.625-.625a4.127 4.127 0 0 1 4.126 4.126a.625.625 0 1 1-1.25 0a2.877 2.877 0 0 0-2.876-2.876a.625.625 0 0 1-.625-.625m.625-3.626a.625.625 0 0 0 0 1.25A5.877 5.877 0 0 1 9.918 9.96a.625.625 0 1 0 1.25 0A7.127 7.127 0 0 0 4.04 2.832Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineRssSquareSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
