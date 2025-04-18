import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeImbaIcon],svg[vscode-icons-file-type-imba-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#16cec6" d="M29.762 13.264C26.689 7.366-.746 1.341 2.224 5.239s16.13 9.245 16.909 9.345c-4.036 1.29-14.813 3.6-12.5 5.552s13.262-.227 13.244-.193c-3.034 2.327-6.811 9.349-3.016 7.849c5.983-2.368 14.692-11.092 12.901-14.528"></svg:path>`,
})
export class VscodeIconsFileTypeImbaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
