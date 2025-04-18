import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciFileImageIcon],svg[ci-file-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7a.104.104 0 0 1 .027 0h.006a.15.15 0 0 0 .029.006c.088.006.175.023.259.051h.042a.421.421 0 0 1 .052.043a.988.988 0 0 1 .293.2l6 6a.987.987 0 0 1 .2.293a.735.735 0 0 1 .023.066l.01.028c.028.083.044.17.049.258a.1.1 0 0 0 .007.029v.006A.112.112 0 0 1 20 9v11a2 2 0 0 1-2 2Zm-9-6l-3 4h12l-5-7l-3 4l-1-1Zm-.5-5a1.5 1.5 0 1 0 1.5 1.578v.29v-.368A1.5 1.5 0 0 0 8.5 11ZM13 4v5h5l-5-5Z"></svg:path>`,
})
export class CiFileImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
