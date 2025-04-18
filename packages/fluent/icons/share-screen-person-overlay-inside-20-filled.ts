import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShareScreenPersonOverlayInside20FilledIcon],svg[fluent-share-screen-person-overlay-inside-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm10 1.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M12 10a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1z"></svg:path>`,
})
export class FluentShareScreenPersonOverlayInside20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
