import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconUploadingFilledIcon],svg[lsicon-uploading-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M13.55 9.529v3.996H2.501V9.53M8 11.053l-.022-8.097m3.286 3.035L7.979 2.706L4.693 5.99"></svg:path>`,
})
export class LsiconUploadingFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
