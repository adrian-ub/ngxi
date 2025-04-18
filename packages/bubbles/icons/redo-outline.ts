import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesRedoOutlineIcon],svg[bubbles-redo-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M23.25.748v7.5h-7.5"></svg:path><svg:path d="M12 23.248a11.25 11.25 0 1 1 10.6-15"></svg:path></svg:g>`,
})
export class BubblesRedoOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
