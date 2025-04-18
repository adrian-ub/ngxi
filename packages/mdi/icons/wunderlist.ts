import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWunderlistIcon],svg[mdi-wunderlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M17 17.5L12 15l-5 2.5V5H5v14h14V5h-2v12.5m-5-5.08l2.25 1.35l-.6-2.55l1.99-1.72L13 9.27l-1-2.41l-1 2.41l-2.64.23l1.99 1.72l-.6 2.55L12 12.42M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" fill="currentColor"></svg:path>`,
})
export class MdiWunderlistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
