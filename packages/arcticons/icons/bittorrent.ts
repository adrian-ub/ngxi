import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBittorrentIcon],svg[arcticons-bittorrent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.944 34.176h-22a8.12 8.12 0 1 1 5.741-13.861"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.112 37.019H20.944c-6.055 0-10.962-4.908-10.962-10.963s4.907-10.962 10.962-10.962c1.486 0 2.903.296 4.196.832"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.515 39.86H20.944c-7.624 0-13.804-6.18-13.804-13.804s6.18-13.804 13.804-13.804"></svg:path>`,
})
export class ArcticonsBittorrentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
