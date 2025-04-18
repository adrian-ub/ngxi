import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGiphyIcon],svg[arcticons-giphy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.582 8.774v30.452h21.37v-21.37h-8.548V8.774z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.774 43.5h30.452V13.048h-4.274V8.774h-4.274V4.5H8.774zm0-34.726h4.808M8.774 39.226h4.808m21.37 0h4.274m-4.6-21.37h4.6M26.404 8.774V4.5"></svg:path>`,
})
export class ArcticonsGiphyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
