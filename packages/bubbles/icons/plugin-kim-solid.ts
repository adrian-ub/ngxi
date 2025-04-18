import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginKimSolidIcon],svg[bubbles-plugin-kim-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.572 6.857a1.715 1.715 0 0 0 .712-2.027a1.7 1.7 0 0 0-.403-.647L12.21.526A1.715 1.715 0 0 0 9.572.8L7.23 4.354L2.315 5.497a1.269 1.269 0 0 0-.617 2.126l7.04 7.028c.235.239.556.375.891.377q.176 0 .343-.057a1.28 1.28 0 0 0 .891-.925l1.143-4.915zm-12.092 4.8a.275.275 0 0 0-.4 0L.704 14.023a1.143 1.143 0 1 0 1.623 1.611l2.366-2.365a.275.275 0 0 0 0-.4z"></svg:path>`,
})
export class BubblesPluginKimSolidIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
