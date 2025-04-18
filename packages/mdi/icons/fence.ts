import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFenceIcon],svg[mdi-fence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9v2H7V9H5v2H3V9H1v12h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2V9h-2v2h-2V9h-2v2h-2V9h-2v2h-2V9zm-6 4h2v4H3zm4 0h2v4H7zm4 0h2v4h-2zm4 0h2v4h-2zm4 0h2v4h-2z"></svg:path>`,
})
export class MdiFenceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
