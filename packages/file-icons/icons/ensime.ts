import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsEnsimeIcon],svg[file-icons-ensime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 278.456v116.325L224.561 512L450 395.228l-113.158-58.386l-112.28 58.044Zm224.561-162.131l112.71 58.833l-112.71 58.386l-112.71-58.386Zm0-116.325L0 116.325v117.219l224.561 117.22L450 233.543V117.219Z"></svg:path>`,
})
export class FileIconsEnsimeIcon {
  readonly viewBox = input("0 0 450 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
