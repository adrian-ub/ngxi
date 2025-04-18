import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolderSettingsFillIcon],svg[ri-folder-settings-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zm-3.823 8.809l-.991.572l1 1.731l.991-.572c.393.371.872.653 1.405.811v1.145h1.999V16.35a3.5 3.5 0 0 0 1.404-.811l.992.572l.999-1.73l-.991-.573a3.5 3.5 0 0 0 0-1.622l.991-.572l-1-1.732l-.992.573a3.5 3.5 0 0 0-1.404-.812V8.5h-1.999v1.144a3.5 3.5 0 0 0-1.404.812L8.6 9.883l-1 1.732l.991.572a3.5 3.5 0 0 0 0 1.622m3.404.688a1.5 1.5 0 1 1 0-2.998a1.5 1.5 0 0 1 0 2.998"></svg:path>`,
})
export class RiFolderSettingsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
