import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCollectionFilledIcon],svg[tdesign-collection-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4V2H5v2zm2 3.5H3v-2h18zM23 9v13H1V9z"></svg:path>`,
})
export class TdesignCollectionFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
