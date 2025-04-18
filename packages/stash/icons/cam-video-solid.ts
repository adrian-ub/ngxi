import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashCamVideoSolidIcon],svg[stash-cam-video-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.25 8.5A2.25 2.25 0 0 1 5.5 6.25h7.25A2.25 2.25 0 0 1 15 8.5v7a2.25 2.25 0 0 1-2.25 2.25H5.5a2.25 2.25 0 0 1-2.25-2.25zm15.691-.81a1.25 1.25 0 0 1 1.809 1.12v6.382a1.25 1.25 0 0 1-1.809 1.118l-2.776-1.388a.75.75 0 0 1-.415-.671v-4.5a.75.75 0 0 1 .415-.67z"></svg:path>`,
})
export class StashCamVideoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
