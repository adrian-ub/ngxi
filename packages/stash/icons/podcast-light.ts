import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashPodcastLightIcon],svg[stash-podcast-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.722 3.101a9.5 9.5 0 0 1 11.996 14.617a.5.5 0 1 1-.708-.708a8.5 8.5 0 1 0-12.02 0a.5.5 0 1 1-.708.707a9.5 9.5 0 0 1 1.44-14.616M9.25 6.237a5.5 5.5 0 0 1 7.513 7.513a.5.5 0 1 1-.866-.5a4.5 4.5 0 1 0-7.794 0a.5.5 0 0 1-.866.5A5.5 5.5 0 0 1 9.25 6.237M12 10a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2 4.5a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1m-2 1a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0z" clip-rule="evenodd"></svg:path>`,
})
export class StashPodcastLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
