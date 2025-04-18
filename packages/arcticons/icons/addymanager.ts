import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAddymanagerIcon],svg[arcticons-addymanager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.475 27.416v5.164a2 2 0 0 0 2 2H41.5a2 2 0 0 0 2-2V15.42a2 2 0 0 0-2-2H14.475a2 2 0 0 0-2 2v4.847"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m40.442 16.478l-12.455 9.166l-12.454-9.166m14.904 7.363l10.005 7.363m-24.909 0l10.005-7.363m-10.005 0h-8.94m3.875-3.574H4.5m5.968 7.149H4.5"></svg:path>`,
})
export class ArcticonsAddymanagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
