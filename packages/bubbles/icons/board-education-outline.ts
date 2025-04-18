import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesBoardEducationOutlineIcon],svg[bubbles-board-education-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.5.516v3m-5 13h-3a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1H7l-.061.293M12 4.516h5.5a1 1 0 0 1 1 1v7.468M5.714 17.516l-1.714 6"></svg:path><svg:path d="M9.5 17.353v3.663m2.5-16.5a1 1 0 0 0-1-1H8a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1m-2.031 11H5.5a1 1 0 0 0-1 1v.5a.5.5 0 0 0 .5.5h2.531zm6.531-.943l-7 2.78l7 2.47l7-2.47z"></svg:path><svg:path d="M12.5 18.412v3.154a.75.75 0 0 0 .471.7l3.25 1.2a.75.75 0 0 0 .558 0l3.25-1.2a.75.75 0 0 0 .471-.7v-3.154"></svg:path></svg:g>`,
})
export class BubblesBoardEducationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
