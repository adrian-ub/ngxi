import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonSignDivisionSlashFillIcon],svg[iconamoon-sign-division-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.447 3.106a1 1 0 0 1 .447 1.341l-8 16a1 1 0 1 1-1.788-.894l8-16a1 1 0 0 1 1.341-.447" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonSignDivisionSlashFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
