import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamWifiIcon],svg[jam-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13.992a1 1 0 1 1 0-2a1 1 0 0 1 0 2M7.894 11.44a1 1 0 0 1-1.788-.894a4.355 4.355 0 0 1 7.788 0a1 1 0 1 1-1.788.894a2.353 2.353 0 0 0-4.212 0M4.8 8.595a1 1 0 0 1-1.6-1.2a8.503 8.503 0 0 1 13.6 0a.999.999 0 1 1-1.6 1.2a6.503 6.503 0 0 0-10.4 0m-3.057-2.93A1 1 0 0 1 .257 4.329c4.843-5.377 13.13-5.813 18.512-.973q.513.461.974.973a.999.999 0 1 1-1.486 1.338a11 11 0 0 0-.826-.826C12.871.74 5.847 1.108 1.743 5.666z"></svg:path>`,
})
export class JamWifiIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
