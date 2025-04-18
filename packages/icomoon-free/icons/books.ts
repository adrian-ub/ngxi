import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeBooksIcon],svg[icomoon-free-books-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 2h-3c-.275 0-.5.225-.5.5v11c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5v-11c0-.275-.225-.5-.5-.5M3 5H1V4h2zm5.5-3h-3c-.275 0-.5.225-.5.5v11c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5v-11c0-.275-.225-.5-.5-.5M8 5H6V4h2z"></svg:path><svg:path fill="currentColor" d="m11.954 2.773l-2.679 1.35a.5.5 0 0 0-.222.671l4.5 8.93a.5.5 0 0 0 .671.222l2.679-1.35a.5.5 0 0 0 .222-.671l-4.5-8.93a.5.5 0 0 0-.671-.222"></svg:path><svg:path fill="currentColor" d="M14.5 13.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></svg:path>`,
})
export class IcomoonFreeBooksIcon {
  readonly viewBox = input("0 0 18 16")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
