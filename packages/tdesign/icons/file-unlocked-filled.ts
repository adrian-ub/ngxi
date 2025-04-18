import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileUnlockedFilledIcon],svg[tdesign-file-unlocked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1H3v22h8.5v-6a6.5 6.5 0 0 1 9.5-5.768V9h-8z"></svg:path><svg:path fill="currentColor" d="M21 7v-.414L15.414 1H15v6zm-4.249 8.75a1.25 1.25 0 0 1 2.131-.887l.71.705l1.41-1.418l-.71-.705a3.25 3.25 0 0 0-5.541 2.305v.75H13.5V23h9v-6.5h-5.749z"></svg:path>`,
})
export class TdesignFileUnlockedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
