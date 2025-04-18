import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiEjectIcon],svg[zmdi-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 299h299v42H0zM149 85l143 171H7z"></svg:path>`,
})
export class ZmdiEjectIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
