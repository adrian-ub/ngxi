import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMediaLibraryIcon],svg[tdesign-media-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h14v2H5zM3 5.5h18v2H3zM1 9h22v13H1zm2 2v9h18v-9zm6.75 1.469L15 15.5l-5.25 3.031z"></svg:path>`,
})
export class TdesignMediaLibraryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
