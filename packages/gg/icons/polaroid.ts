import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPolaroidIcon],svg[gg-polaroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2 0h14v11H5z" clip-rule="evenodd"></svg:path>`,
})
export class GgPolaroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
