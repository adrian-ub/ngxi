import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeJuiceIcon],svg[vscode-icons-file-type-juice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="16" cy="16.054" fill="#fce494" rx="13.163" ry="13.109"></svg:ellipse><svg:circle cx="16.018" cy="16.018" r="13.516" fill="none" stroke="#ffc108" stroke-width=".976"></svg:circle><svg:g fill="#ffc108"><svg:path d="M15.587 29.235h1.006V2.945h-1.006z"></svg:path><svg:path d="M2.945 15.585v1.006l26.29.005V15.59z"></svg:path><svg:path d="m7.155 6.436l-.711.71l18.581 18.599l.712-.711z"></svg:path><svg:path d="m25.75 7.161l-.71-.712L6.428 25.02l.71.711z"></svg:path></svg:g>`,
})
export class VscodeIconsFileTypeJuiceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
