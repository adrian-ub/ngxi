import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsPenToSquareIcon],svg[lineicons-pen-to-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.875 2.513a1.75 1.75 0 0 0-2.475 0L13.242 7.67a2.25 2.25 0 0 0-.646 1.349l-.19 1.747a.75.75 0 0 0 .827.826l1.747-.189a2.25 2.25 0 0 0 1.35-.646L21.486 5.6a1.75 1.75 0 0 0 0-2.475zm-2.277 1.923l.966.966l-4.296 4.296a.75.75 0 0 1-.45.215l-.82.089l.09-.82a.75.75 0 0 1 .215-.45z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.5 3.25h10.041l-1.5 1.5H5.5a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h13a.75.75 0 0 0 .75-.75V9.958l1.5-1.5V18.5a2.25 2.25 0 0 1-2.25 2.25h-13a2.25 2.25 0 0 1-2.25-2.25v-13A2.25 2.25 0 0 1 5.5 3.25"></svg:path>`,
})
export class LineiconsPenToSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
