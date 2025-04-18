import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHandHeldIcon],svg[streamline-hand-held-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-10 10h11M4.5 3h5m-5 2.5h5M4.5 8h3"></svg:path>`,
})
export class StreamlineHandHeldIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
