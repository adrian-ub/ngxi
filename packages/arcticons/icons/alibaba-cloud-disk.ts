import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAlibabaCloudDiskIcon],svg[arcticons-alibaba-cloud-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.733 24.737C40.97 14.585 33.673 4.174 21.39 4.174c-9.879 0-18.03 8.68-17.887 19.385c.13 9.814 8.63 19.028 17.887 20.104c9.812 1.14 19.368-3.723 23.033-14.042c.252-.71-.11-1.492-.999-1.708l-3.171-.773c-.883-.216-.718-.761-.519-2.403"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.569 23.766c.76-5.816-3.807-11.409-9.59-11.972c-4.844-.472-11.916 2.574-11.837 11.934c.06 7.112 6.124 12.032 11.837 12.606c6.431.647 11.93-2.52 14.188-8.873c.155-.438-.078-.882-.615-1.052l-3.663-1.164c-.534-.17-.452-.47-.32-1.479"></svg:path>`,
})
export class ArcticonsAlibabaCloudDiskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
