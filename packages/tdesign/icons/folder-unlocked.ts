import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFolderUnlockedIcon],svg[tdesign-folder-unlocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2.5h8.48l2 2.5H23v5h-2V7H10.52l-2-2.5H3V19h10v2H1zm18.5 11c-.69 0-1.25.56-1.25 1.25v.75h5.749V22h-9v-6.5h1.251v-.75a3.25 3.25 0 0 1 5.541-2.305l.71.705l-1.41 1.418l-.71-.705a1.24 1.24 0 0 0-.881-.363m-2.501 4V20h5v-2.5z"></svg:path>`,
})
export class TdesignFolderUnlockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
