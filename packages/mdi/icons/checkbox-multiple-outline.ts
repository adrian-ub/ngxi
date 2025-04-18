import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCheckboxMultipleOutlineIcon],svg[mdi-checkbox-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 14H8V4h12zm-4 4v2H4a2 2 0 0 1-2-2V7h2v13zm2.53-11.94L17.47 7l-4.88 4.88l-2.12-2.12l-1.06 1.06L12.59 14z"></svg:path>`,
})
export class MdiCheckboxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
