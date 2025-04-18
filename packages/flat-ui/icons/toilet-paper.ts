import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiToiletPaperIcon],svg[flat-ui-toilet-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F1C40F" fill-rule="evenodd" d="M78.993 26h21l.007 74H39.865v-.004l-.355.004C17.682 100-.011 94.27-.011 87.199L-.007 13h79z" clip-rule="evenodd"></svg:path><svg:path fill="#F39C12" d="M40 13h39v13H40z"></svg:path><svg:ellipse cx="39.5" cy="13" fill="#E67E22" rx="39.5" ry="13"></svg:ellipse><svg:ellipse cx="40.334" cy="12.812" opacity=".2" rx="16" ry="4.5"></svg:ellipse><svg:path fill="#F39C12" fill-rule="evenodd" d="M40.668 93a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0-8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0-8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0-8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0-16a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0-8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0-12a2 2 0 1 0 0-3.998a2 2 0 0 0 0 3.998m0 4a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 24a2 2 0 1 0 0 4a2 2 0 0 0 0-4" clip-rule="evenodd"></svg:path>`,
})
export class FlatUiToiletPaperIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
