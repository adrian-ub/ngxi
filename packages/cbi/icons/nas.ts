import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiNasIcon],svg[cbi-nas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2c-1.108 0-2 .892-2 2v14c0 1.108.892 2 2 2v2h2v-2h12v2h2v-2c1.108 0 2-.892 2-2V4c0-1.108-.892-2-2-2Zm0 2h10v14H4Zm11 0h5v14h-5zm1.95 1.25a.75.75 0 1 0 0 1.5h1a.75.75 0 1 0 0-1.5zm0 3a.75.75 0 1 0 0 1.5h1a.75.75 0 1 0 0-1.5z"></svg:path>`,
})
export class CbiNasIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
