import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderArchiveIcon],svg[material-icon-theme-folder-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffa726" d="m443.008 241.152l-41.216-34.304A64 64 0 0 0 360.832 192H128a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h768a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H483.968a64 64 0 0 1-40.96-14.848"></svg:path><svg:path fill="#ffe0b2" d="M512 320c-35.456 0-64 28.544-64 64v64c0 35.456 28.544 64 64 64v320c0 35.456 28.544 64 64 64h320c35.456 0 64-28.544 64-64V512c35.456 0 64-28.544 64-64v-64c0-35.456-28.544-64-64-64zm0 64h448v64H512zm128 128h192v64H640z"></svg:path>`,
})
export class MaterialIconThemeFolderArchiveIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
