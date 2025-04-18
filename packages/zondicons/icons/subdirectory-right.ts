import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsSubdirectoryRightIcon],svg[zondicons-subdirectory-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 13H12v5l6-6l-6-6v5H4V2H2v11z"></svg:path>`,
})
export class ZondiconsSubdirectoryRightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
