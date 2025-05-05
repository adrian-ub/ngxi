import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFilesIcon],svg[picon-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v1h6V2H7v5M3 0v2h2M1 6V0h3l2 2v4"></svg:path>`,
})
export class PiconFilesIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
