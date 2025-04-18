import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDdbplayerIcon],svg[arcticons-ddbplayer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.347 24h11.307c3.72 0 6.735-3.022 6.735-6.75h0c0-3.728-3.015-6.75-6.735-6.75H13.61l2.736 2.846M16.347 24h11.307c3.72 0 6.735 3.022 6.735 6.75h0c0 3.728-3.015 6.75-6.735 6.75H16.347"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.347 10.5h-2.736l2.736 2.846m0 10.654h-2.736l2.736 2.846m0-2.846V13.346"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.347 37.5h-2.736l2.736-2.846v-7.808"></svg:path>`,
})
export class ArcticonsDdbplayerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
