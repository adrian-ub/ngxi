import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFontSpaceTrackingOut16FilledIcon],svg[fluent-font-space-tracking-out-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.695 8.534a.75.75 0 0 1-1.389 0l-2.25-5.5a.75.75 0 1 1 1.388-.568l1.557 3.804l1.556-3.804a.75.75 0 0 1 1.388.568zM5 2a.75.75 0 0 1 .694.466l2.25 5.5a.75.75 0 0 1-1.388.568L6.133 7.5H3.867l-.423 1.034a.75.75 0 0 1-1.388-.568l2.25-5.5A.75.75 0 0 1 5 2m.52 4L5 4.731l-.519 1.27zm5.95 4.22a.75.75 0 0 1 1.06 0l1.25 1.249a.75.75 0 0 1 0 1.06l-1.25 1.251a.75.75 0 0 1-1.089-1.03H4.56a.75.75 0 0 1-1.089 1.03l-1.25-1.248a.75.75 0 0 1 0-1.06l1.25-1.252a.75.75 0 0 1 1.09 1.03h6.881a.75.75 0 0 1 .029-1.03"></svg:path>`,
})
export class FluentFontSpaceTrackingOut16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
