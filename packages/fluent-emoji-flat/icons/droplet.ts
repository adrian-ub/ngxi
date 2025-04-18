import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatDropletIcon],svg[fluent-emoji-flat-droplet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#26C9FC" d="M18.27 3.388c-.991-1.85-3.663-1.85-4.643 0l-6.273 11.8c-3.842 6.58.95 14.81 8.614 14.81h.21c7.554 0 12.266-8.1 8.494-14.58z"></svg:path>`,
})
export class FluentEmojiFlatDropletIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
