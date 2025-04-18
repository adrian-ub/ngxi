import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsFlutterIcon],svg[file-icons-flutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M415.513 0L79.18 337.114L0 257.89L257.29 0zm-.972 238.328H256.32L118.506 376.46L253.804 512h156.97L276.516 376.674z"></svg:path>`,
})
export class FileIconsFlutterIcon {
  readonly viewBox = input("0 0 416 512")
  readonly width = input("0.82em")
  readonly height = input("1em")
}
