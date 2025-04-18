import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowSyncOff12RegularIcon],svg[fluent-arrow-sync-off-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.84 3.547A4 4 0 0 0 2 6c0 .959.338 1.84.9 2.529a.5.5 0 0 0 .775-.633A3 3 0 0 1 3 6c0-.648.205-1.248.555-1.738l4.183 4.183c-.435.31-.958.507-1.523.547l.389-.388a.5.5 0 1 0-.707-.708l-1.25 1.25a.5.5 0 0 0 0 .708l1.25 1.25a.5.5 0 0 0 .707-.708l-.402-.401a4 4 0 0 0 2.25-.835l1.694 1.694a.5.5 0 0 0 .708-.708l-9-9a.5.5 0 1 0-.708.708zm6.058 3.23l.785.785C9.887 7.082 10 6.554 10 6a4 4 0 0 0-1.099-2.754a.5.5 0 0 0-.725.689a2.99 2.99 0 0 1 .722 2.842m-4.46-4.46l1.726 1.726l1.19-1.19a.5.5 0 0 0 0-.707L6.103.896a.5.5 0 0 0-.708.708l.402.401a4 4 0 0 0-1.36.312"></svg:path>`,
})
export class FluentArrowSyncOff12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
