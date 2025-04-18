import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMemory16RegularIcon],svg[fluent-memory-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.414 4.586A2 2 0 0 0 13 4V2.5a.5.5 0 0 0-1 0V4h-2V2.5a.5.5 0 1 0-1 0V4H7V2.5a.5.5 0 1 0-1 0V4H4V2.5a.5.5 0 1 0-1 0V4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v1.5a.5.5 0 0 0 1 0V12h2v1.5a.5.5 0 0 0 1 0V12h2v1.5a.5.5 0 0 0 1 0V12h2v1.5a.5.5 0 0 0 1 0V12a2 2 0 0 0 2-2V6a2 2 0 0 0-.586-1.414M14 10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1zm-1.5-4h-9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5M12 9H4V7h8z"></svg:path>`,
})
export class FluentMemory16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
