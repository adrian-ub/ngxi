import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSyncOff20FilledIcon],svg[fluent-sync-off-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.938 9h-5.632l.675-2.363a.5.5 0 0 0-.962-.274l-2 7a.5.5 0 0 0 .962.274L12.02 10H18a8 8 0 0 1-16 0h5.98l-.96 3.363a.5.5 0 0 0 .96.274l2-7a.5.5 0 0 0-.96-.274L8.265 9H2.062a8.001 8.001 0 0 1 15.876 0"></svg:path>`,
})
export class FluentSyncOff20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
