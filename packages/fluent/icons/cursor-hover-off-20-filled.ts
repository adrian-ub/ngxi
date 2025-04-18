import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCursorHoverOff20FilledIcon],svg[fluent-cursor-hover-off-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.854 2.146a.5.5 0 1 0-.708.708l1.242 1.241A2 2 0 0 0 2 6v7a2 2 0 0 0 2 2h5v-4.5c0-.229.052-.448.146-.646l.854.853V17.5a.5.5 0 0 0 .91.287l1.571-2.245l2.781.427l1.884 1.885a.5.5 0 0 0 .708-.708l-8-8zm11.212 12.628l-1.74-.268a.5.5 0 0 0-.486.207l-.84 1.2v-4.206zm2.84.01A2 2 0 0 0 18 13V6a2 2 0 0 0-2-2H6.121z"></svg:path>`,
})
export class FluentCursorHoverOff20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
