import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLivePhotoIcon],svg[tabler-live-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path><svg:path d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0m8.9 8.11v.01m3.14-2.51v.01M20.77 14v.01m0-4.01v.01m-1.73-3.62v.01M15.9 3.89v.01M12 3v.01m-3.9.88v.01M4.96 6.39v.01M3.23 10v.01m0 3.99v.01m1.73 3.6v.01m3.14 2.49v.01M12 21v.01"></svg:path></svg:g>`,
})
export class TablerLivePhotoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
