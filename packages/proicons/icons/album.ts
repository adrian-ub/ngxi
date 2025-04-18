import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsAlbumIcon],svg[proicons-album-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="16.5" height="16.5" x="3.75" y="3.75" stroke-linecap="round" rx="3"></svg:rect><svg:path d="M16.25 3.75h-6v7.517a.2.2 0 0 0 .341.142l1.952-1.952a1 1 0 0 1 1.414 0l1.952 1.952a.2.2 0 0 0 .341-.142z"></svg:path></svg:g>`,
})
export class ProiconsAlbumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
