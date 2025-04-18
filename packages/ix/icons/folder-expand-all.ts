import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFolderExpandAllIcon],svg[ix-folder-expand-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m224.282 170.667l53.051 42.666H448V448H64V170.667zm-15.023 42.666H106.667v192h298.666V256H262.305zM220.757 64l53.952 42.667H448V192h-42.667v-42.667l-145.45.022l-53.952-42.688h-99.264v42.666H64V64z"></svg:path>`,
})
export class IxFolderExpandAllIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
