import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileRestoreFilledIcon],svg[tdesign-file-restore-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1H3v22h9a7.5 7.5 0 0 1 9-11.376V9h-8z"></svg:path><svg:path fill="currentColor" d="M21 7v-.414L15.414 1H15v6zm-3.586 7l1-1L17 11.586L13.586 15L17 18.414L18.414 17l-1-1H18a3 3 0 1 1-3 3v-1h-2v1a5 5 0 1 0 5-5z"></svg:path>`,
})
export class TdesignFileRestoreFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
