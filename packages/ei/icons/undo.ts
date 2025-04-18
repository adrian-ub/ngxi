import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eiUndoIcon],svg[ei-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 38c-5.1 0-9.7-3-11.8-7.6l1.8-.8c1.8 3.9 5.7 6.4 10 6.4c6.1 0 11-4.9 11-11s-4.9-11-11-11c-4.6 0-8.5 2.8-10.1 7.3l-1.9-.7c1.9-5.2 6.6-8.6 12-8.6c7.2 0 13 5.8 13 13s-5.8 13-13 13"></svg:path><svg:path fill="currentColor" d="M20 22h-8v-8h2v6h6z"></svg:path>`,
})
export class EiUndoIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
