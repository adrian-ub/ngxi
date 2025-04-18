import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFolderUnlockedFilledIcon],svg[tdesign-folder-unlocked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2.5h8.48l2 2.5H23v5.522A6.5 6.5 0 0 0 13 16v5H1z"></svg:path><svg:path fill="currentColor" d="M18.25 14.75a1.25 1.25 0 0 1 2.131-.887l.71.705l1.41-1.418l-.71-.705a3.25 3.25 0 0 0-5.541 2.305v.75h-1.251V22h9v-6.5H18.25z"></svg:path>`,
})
export class TdesignFolderUnlockedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
