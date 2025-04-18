import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaArrowRightCircleOutlineIcon],svg[cuida-arrow-right-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="arrow-right-circle-outline"><svg:g fill="currentColor" fill-rule="evenodd" class="Vector" clip-rule="evenodd"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-10 8a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path><svg:path d="M17 12a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1"></svg:path><svg:path d="M16.707 11.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L14.586 12l-2.293-2.293a1 1 0 0 1 1.414-1.414z"></svg:path></svg:g></svg:g>`,
})
export class CuidaArrowRightCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
