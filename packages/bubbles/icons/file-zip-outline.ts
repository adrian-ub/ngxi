import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesFileZipOutlineIcon],svg[bubbles-file-zip-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M11.249 15.748h1.892a.75.75 0 0 1 .7 1.03L11.66 22.22a.748.748 0 0 0 .7 1.028h1.892m2.997 0v-7.5m3 7.5v-7.5m0 0H21a2.25 2.25 0 1 1 0 4.5h-.75"></svg:path><svg:path d="M8.249 23.248h-6a1.5 1.5 0 0 1-1.5-1.5v-19.5a1.5 1.5 0 0 1 1.5-1.5h10.628a1.5 1.5 0 0 1 1.061.439l5.871 5.872a1.5 1.5 0 0 1 .44 1.06v4.629"></svg:path><svg:path d="M20.249 8.248h-6a1.5 1.5 0 0 1-1.5-1.5v-6"></svg:path></svg:g>`,
})
export class BubblesFileZipOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
