import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCrop28FilledIcon],svg[fluent-crop-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3a1 1 0 0 0-2 0v3H3a1 1 0 0 0 0 2h3v9.75A4.25 4.25 0 0 0 10.25 22H20v3a1 1 0 1 0 2 0v-3h3a1 1 0 1 0 0-2H10.25A2.25 2.25 0 0 1 8 17.75zm12 7.25V19h2v-8.75A4.25 4.25 0 0 0 17.75 6H9v2h8.75A2.25 2.25 0 0 1 20 10.25"></svg:path>`,
})
export class FluentCrop28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
