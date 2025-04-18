import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashCamVideoIcon],svg[stash-cam-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 6.25A2.25 2.25 0 0 0 3.25 8.5v7a2.25 2.25 0 0 0 2.25 2.25h8a2.25 2.25 0 0 0 2.25-2.25v-.787l3.191 1.596a1.25 1.25 0 0 0 1.809-1.118V8.809a1.25 1.25 0 0 0-1.809-1.118L15.75 9.286V8.5a2.25 2.25 0 0 0-2.25-2.25zm10.25 4.714v2.072l3.5 1.75V9.213zM14.25 8.5a.75.75 0 0 0-.75-.75h-8a.75.75 0 0 0-.75.75v7c0 .414.336.75.75.75h8a.75.75 0 0 0 .75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class StashCamVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
