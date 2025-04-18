import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFileImportFilledIcon],svg[lsicon-file-import-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1.5a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 .354.146l3.5 3.5A.5.5 0 0 1 13 5v2.5h-1v-2H9a.5.5 0 0 1-.5-.5V2H4v12h5.5v1h-6a.5.5 0 0 1-.5-.5zm6.5 1.207L11.293 4.5H9.5zm-2.854 7.94l2-2l.708.707L8.207 10.5H13v1H8.207l1.147 1.146l-.708.708l-2-2a.5.5 0 0 1 0-.708" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFileImportFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
