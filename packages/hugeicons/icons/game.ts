import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGameIcon],svg[hugeicons-game-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 14.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 7 6.212 7 9.5 7h5c3.288 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C22 9.57 22 11.212 22 14.5s0 4.931-.908 6.038a4 4 0 0 1-.554.554C19.43 22 17.788 22 14.5 22h-5c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 19.43 2 17.788 2 14.5M12 7V5a1 1 0 0 1 1-1a1 1 0 0 0 1-1V2m-4 14l-1.5-1.5m0 0L7 13m1.5 1.5L7 16m1.5-1.5L10 13m7 2.5v-2" color="currentColor"></svg:path>`,
})
export class HugeiconsGameIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
