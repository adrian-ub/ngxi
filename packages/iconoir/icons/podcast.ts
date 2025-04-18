import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPodcastIcon],svg[iconoir-podcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="iconoirPodcast0" d="M6 19a9.99 9.99 0 0 1-4-8C2 5.477 6.477 1 12 1s10 4.477 10 10a9.99 9.99 0 0 1-4 8"></svg:path></svg:defs><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:use href="#iconoirPodcast0"></svg:use><svg:use href="#iconoirPodcast0"></svg:use><svg:path d="M7.528 15a6 6 0 1 1 8.944 0"></svg:path><svg:path d="M12 13a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-1.924 3.283l.815-.543a2 2 0 0 1 2.218 0l.815.543a2 2 0 0 1 .863 1.993l-.509 3.053A2 2 0 0 1 12.307 23h-.612a2 2 0 0 1-1.973-1.671l-.508-3.053a2 2 0 0 1 .863-1.993"></svg:path></svg:g>`,
})
export class IconoirPodcastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
