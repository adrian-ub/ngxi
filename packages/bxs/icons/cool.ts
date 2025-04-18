import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsCoolIcon],svg[bxs-cool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m4.095 14.244a6 6 0 0 1-3.034 1.634a6.05 6.05 0 0 1-2.414 0a5.9 5.9 0 0 1-2.148-.903a6.1 6.1 0 0 1-1.621-1.622l1.658-1.117q.216.318.488.59a4 4 0 0 0 1.273.86q.366.154.749.232a4.1 4.1 0 0 0 1.616 0q.381-.079.75-.233c.234-.1.464-.224.679-.368q.313-.214.591-.489q.275-.274.489-.592l1.658 1.117c-.215.32-.462.62-.734.891M19 10a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2h-2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8h14z"></svg:path>`,
})
export class BxsCoolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
