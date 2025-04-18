import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandGooglePodcastsIcon],svg[tabler-brand-google-podcasts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v2m0 14v2m0-13v8m-4 1v2m-4-8v2m16-2v2M8 5v8m8-6V5m0 14v-8"></svg:path>`,
})
export class TablerBrandGooglePodcastsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
