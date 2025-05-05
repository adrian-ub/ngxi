import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderAttachmentIcon],svg[material-icon-theme-folder-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9c27b0" d="m443.008 241.152l-41.216-34.304A64 64 0 0 0 360.832 192H128a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h768a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H483.968a64 64 0 0 1-40.96-14.848"></svg:path><svg:path fill="#e1bee7" d="M960 416.219V544c0 53.02-42.98 96-96 96H544c-17.673 0-32-14.327-32-32s14.327-32 32-32h320v-64H544c-53.02 0-96 42.98-96 96s42.98 96 96 96h320c88.366 0 160-71.634 160-160c0-52.295-25.203-98.585-64-127.781"></svg:path>`,
})
export class MaterialIconThemeFolderAttachmentIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
