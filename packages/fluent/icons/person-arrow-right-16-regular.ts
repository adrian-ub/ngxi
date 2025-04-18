import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonArrowRight16RegularIcon],svg[fluent-person-arrow-right-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10c0 1.803 1.555 3.653 4.222 3.957a5.5 5.5 0 0 1-.72-1.157C3.882 12.333 3 11.128 3 10v-.5a.5.5 0 0 1 .5-.5h1.707q.149-.524.393-1H3.5A1.5 1.5 0 0 0 2 9.5zm7.75-5.75q-.001.429-.124.82a5.5 5.5 0 0 0-1.385.414a1.75 1.75 0 1 0-.836.47a5.5 5.5 0 0 0-1.078.963A2.751 2.751 0 1 1 9.75 4.25M15 10.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.147.354l.003-.003a.5.5 0 0 0 .144-.348v-.006a.5.5 0 0 0-.146-.35l-2-2a.5.5 0 0 0-.708.707L11.293 10H8.5a.5.5 0 0 0 0 1h2.793l-1.147 1.146a.5.5 0 0 0 .708.708z"></svg:path>`,
})
export class FluentPersonArrowRight16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
