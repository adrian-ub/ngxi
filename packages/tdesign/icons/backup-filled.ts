import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBackupFilledIcon],svg[tdesign-backup-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c3.728 0 6.82 2.72 7.402 6.283A6.502 6.502 0 0 1 17.5 21h-11A6.5 6.5 0 0 1 4.598 8.283A7.5 7.5 0 0 1 12 2m3 10.914l1.414-1.414L12 7.086L7.586 11.5L9 12.914l2-2V17h2v-6.086z"></svg:path>`,
})
export class TdesignBackupFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
