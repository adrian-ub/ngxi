import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFilePdfStroke16Icon],svg[garden-file-pdf-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M14.5 4.2V15a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V1A.5.5 0 0 1 2 .5h8.85a.5.5 0 0 1 .36.15l3.15 3.2a.5.5 0 0 1 .14.35zm-10 8.3h7m-7-2h7m-1-10V4a.5.5 0 0 0 .5.5h3.5"></svg:path><svg:rect width="8" height="2" x="4" y="7" fill="currentColor" rx=".5" ry=".5"></svg:rect>`,
})
export class GardenFilePdfStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
