import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatFileFolderIcon],svg[fluent-emoji-flat-file-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFB02E" d="m15.385 7.39l-2.477-2.475A3.12 3.12 0 0 0 10.698 4H4.126A2.125 2.125 0 0 0 2 6.125V13.5h28v-3.363a2.125 2.125 0 0 0-2.125-2.125H16.888a2.13 2.13 0 0 1-1.503-.621"></svg:path><svg:path fill="#FCD53F" d="M27.875 30H4.125A2.12 2.12 0 0 1 2 27.888V13.112C2 11.945 2.951 11 4.125 11h23.75c1.174 0 2.125.945 2.125 2.112v14.776A2.12 2.12 0 0 1 27.875 30"></svg:path></svg:g>`,
})
export class FluentEmojiFlatFileFolderIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
