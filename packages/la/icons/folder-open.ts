import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laFolderOpenIcon],svg[la-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3v24.813l.781.156l12 2.5l1.219.25V28h6V15.437l1.719-1.718l.281-.313V3zm9.125 2H25v7.563l-1.719 1.718l-.281.313V26h-4v-8.906l-.281-.313L17 15.063V5.719zM7 5.281l8 2v8.625l.281.313L17 17.937v10.344L7 26.188z"></svg:path>`,
})
export class LaFolderOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
