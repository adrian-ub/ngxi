import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAsthmaNegativeIcon],svg[healthicons-asthma-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsAsthmaNegative0)"><svg:path d="M15.5 23a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m23.742-3.38l.463-1.72l-2.536-.676l-.349 1.294z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM5.918 6.044Q6.454 6 7 6c7.18 0 13 5.82 13 13v1.697l2.796 4.194C23.682 26.22 22.729 28 21.13 28H20v2a1 1 0 0 1-1 1h-1a2 2 0 0 0-2 2h3a1 1 0 0 1 1 1v3a4 4 0 0 1-1.917 3.416c-.715.436-1.484.494-2.16.405c-.666-.088-1.303-.324-1.826-.549L10 38.517V43a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.041a1 1 0 0 1 .918-.997m30.802 8.99a1 1 0 0 0-1.223.706l-.493 1.83a1 1 0 0 0-1.372.65L31.247 27H28a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h6.204a5 5 0 0 0 4.82-3.673l2.94-10.678a1 1 0 0 0-.551-1.177l-.294-.132l.777-2.888a1 1 0 0 0-.708-1.226zM26 35v-7h-2v7z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsAsthmaNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsAsthmaNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
