import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBookOpenUserBoldIcon],svg[ph-book-open-user-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 72h-72a43.86 43.86 0 0 0-32 13.85A43.86 43.86 0 0 0 96 72H24a12 12 0 0 0-12 12v116a12 12 0 0 0 12 12h72a20 20 0 0 1 20 20a12 12 0 0 0 24 0a20 20 0 0 1 20-20h72a12 12 0 0 0 12-12V84a12 12 0 0 0-12-12M96 188H36V96h60a20 20 0 0 1 20 20v76.81A43.8 43.8 0 0 0 96 188m124 0h-60a43.7 43.7 0 0 0-20 4.83V116a20 20 0 0 1 20-20h60ZM86.4 40.79a52 52 0 0 1 83.2 0a12 12 0 0 1-19.19 14.42a28 28 0 0 0-44.82 0A12 12 0 0 1 86.4 40.79"></svg:path>`,
})
export class PhBookOpenUserBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
