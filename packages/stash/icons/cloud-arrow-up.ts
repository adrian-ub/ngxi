import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashCloudArrowUpIcon],svg[stash-cloud-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5.75c-2.674 0-4.881 2-5.208 4.584l-.059.464l-.443.151A3.752 3.752 0 0 0 6.5 18.25a.75.75 0 0 1 0 1.5a5.23 5.23 0 0 1-3.3-1.167a5.25 5.25 0 0 1 1.176-8.885A6.752 6.752 0 0 1 17.52 9.25a5.25 5.25 0 0 1-.021 10.5a.75.75 0 0 1 0-1.5c.894 0 1.713-.312 2.357-.833a3.75 3.75 0 0 0-2.839-6.636l-.72.092l-.115-.717A5.25 5.25 0 0 0 11 5.75"></svg:path><svg:path fill="currentColor" d="m12.53 12.47l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V21a.75.75 0 0 1-1.5 0v-6.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class StashCloudArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
