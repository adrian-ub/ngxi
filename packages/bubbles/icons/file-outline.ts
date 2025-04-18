import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesFileOutlineIcon],svg[bubbles-file-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18.647 23.25H2.25a1.5 1.5 0 0 1-1.5-1.5V2.25a1.5 1.5 0 0 1 1.5-1.5h10.629a1.5 1.5 0 0 1 1.06.439l5.872 5.872a1.5 1.5 0 0 1 .439 1.06v13.343c0 .854-.514 1.786-1.603 1.786"></svg:path><svg:path d="M20.25 8.25h-6a1.5 1.5 0 0 1-1.5-1.5v-6"></svg:path></svg:g>`,
})
export class BubblesFileOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
