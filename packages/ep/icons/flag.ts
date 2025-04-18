import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epFlagIcon],svg[ep-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 128h608L736 384l160 256H288v320h-96V64h96z"></svg:path>`,
})
export class EpFlagIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
