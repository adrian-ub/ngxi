import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFoldersIcon],svg[picon-folders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8V7h5V4h1v4M0 6V1h3l1 1h2v4"></svg:path>`,
})
export class PiconFoldersIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
