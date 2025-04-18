import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHaberturkTvIcon],svg[arcticons-haberturk-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.75 27.466h5.2m-2.6 8v-8"></svg:path><svg:circle cx="15.05" cy="35.166" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.75 11.448v8m5.3-8v8m-5.3-4.1h5.3m-5.3 7.891h14.74m-.24 4.227l-2.6 8l-2.6-8"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.05 11.448h5.2m-2.6 8v-8"></svg:path>`,
})
export class ArcticonsHaberturkTvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
