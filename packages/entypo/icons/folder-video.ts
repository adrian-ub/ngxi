import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoFolderVideoIcon],svg[entypo-folder-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.405 2.799c-.112-.44-.656-.799-1.21-.799H2.805c-.555 0-1.099.359-1.21.799L1.394 4h17.211zM19.412 5H.587a.58.58 0 0 0-.577.635l.923 11.669a.77.77 0 0 0 .766.696H18.3a.77.77 0 0 0 .766-.696l.923-11.669A.58.58 0 0 0 19.412 5M8 14V9l4.383 2.5z"></svg:path>`,
})
export class EntypoFolderVideoIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
