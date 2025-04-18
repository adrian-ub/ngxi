import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilFolderIcon],svg[il-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M714 190q11 0 18 7t5 18l-42 428q-2 10-12 10H55q-11 0-11-10L1 215q-1-10 6-18t17-7zm-20-46H45V28q0-10 7-17t16-6h185q10 0 17 6t7 17v23h393q10 0 17 6t7 17z"></svg:path>`,
})
export class IlFolderIcon {
  readonly viewBox = input("0 0 740 800")
  readonly width = input("0.93em")
  readonly height = input("1em")
}
