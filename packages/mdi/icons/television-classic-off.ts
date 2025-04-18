import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTelevisionClassicOffIcon],svg[mdi-television-classic-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L21 21.72L19.73 23l-2-2H4c-1.11 0-2-.89-2-2V9c0-1 .76-1.86 1.75-2zM8.16 3L12 6.84L15.84 3l1.41 1.41L14.66 7H20c1.11 0 2 .89 2 2v10c0 .34-.08.66-.23.94L17 15.18V9h-6.18l-2-2h.52L6.75 4.41zM4 9v10h11.73l-10-10zm15.5 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m0 3a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiTelevisionClassicOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
