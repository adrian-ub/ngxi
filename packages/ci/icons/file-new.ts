import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciFileNewIcon],svg[ci-file-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7a.104.104 0 0 1 .027 0h.006a.15.15 0 0 0 .029.006c.088.006.175.023.259.051h.042a.421.421 0 0 1 .052.043a.988.988 0 0 1 .293.2l6 6a.987.987 0 0 1 .2.293a.735.735 0 0 1 .023.066v.028c.028.083.044.17.049.258a.1.1 0 0 0 .007.029v.006c.005.006.01.013.013.02v11a2 2 0 0 1-2 2ZM6 4v16h12V10h-5a1 1 0 0 1-1-1V4H6Zm8 1.414V8h2.586L14 5.414ZM13 18h-2v-2H9v-2h2v-2h2v2h2v2h-2v2Z"></svg:path>`,
})
export class CiFileNewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
