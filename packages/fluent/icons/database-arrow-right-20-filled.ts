import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDatabaseArrowRight20FilledIcon],svg[fluent-database-arrow-right-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 8c3.314 0 6-1.343 6-3s-2.686-3-6-3s-6 1.343-6 3s2.686 3 6 3m4.69.016c.47-.235.927-.534 1.31-.896v2.087a5.5 5.5 0 0 0-5.745 8.79L10 18c-3.314 0-6-1.343-6-3V7.12c.383.362.84.661 1.31.896C6.562 8.642 8.222 9 10 9s3.438-.358 4.69-.984M14.5 10a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m2.353 4.854l.003-.003a.5.5 0 0 0 .144-.348v-.006a.5.5 0 0 0-.146-.35l-2-2a.5.5 0 0 0-.708.707L15.293 14H12.5a.5.5 0 0 0 0 1h2.793l-1.147 1.146a.5.5 0 0 0 .708.708z"></svg:path>`,
})
export class FluentDatabaseArrowRight20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
