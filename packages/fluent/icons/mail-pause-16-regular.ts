import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailPause16RegularIcon],svg[fluent-mail-pause-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10.793V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8.876l4.763 2.564a.5.5 0 0 0 .474 0l1.411-.76q-.587-.21-1.104-.54L7 10.431L2 7.74V7a1 1 0 0 1 1-1h2.022a5.6 5.6 0 0 1 0-1H3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2.6a5.5 5.5 0 0 1-1 .393M10.5 10a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-1-6.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0m3 0v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0"></svg:path>`,
})
export class FluentMailPause16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
