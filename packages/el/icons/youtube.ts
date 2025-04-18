import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elYoutubeIcon],svg[el-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1200 1055.438H0V144.562h1200zm-772.708-189.34l419.616-263.539l-419.616-263.54z"></svg:path>`,
})
export class ElYoutubeIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
