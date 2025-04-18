import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsBuildings1Icon],svg[lineicons-buildings-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 14.667a.75.75 0 0 1 .75-.75h3a.75.75 0 1 1 0 1.5h-3a.75.75 0 0 1-.75-.75m.75-6.084a.75.75 0 0 0 0 1.5h3a.75.75 0 1 0 0-1.5z"></svg:path><svg:path fill="currentColor" d="M11.5 3.25A2.25 2.25 0 0 0 9.25 5.5v2.25H5.5A2.25 2.25 0 0 0 3.25 10v10c0 .414.336.75.75.75h16a.75.75 0 0 0 .75-.75V5.5a2.25 2.25 0 0 0-2.25-2.25zm-2.25 16h-4.5V10a.75.75 0 0 1 .75-.75h3.75v2.25H7.756a.75.75 0 0 0 0 1.5H9.25v2.5H7.756a.75.75 0 0 0 0 1.5H9.25zm1.5-6.973V5.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v13.75h-8.5z"></svg:path>`,
})
export class LineiconsBuildings1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
