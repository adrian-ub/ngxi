import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggDriveIcon],svg[gg-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-5 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></svg:path><svg:path fill-rule="evenodd" d="M2 8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm20 2H2v4h20z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
