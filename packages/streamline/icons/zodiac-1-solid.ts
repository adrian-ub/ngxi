import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineZodiac1SolidIcon],svg[streamline-zodiac-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.846 3.385A.846.846 0 0 0 2 4.23v5.538a1 1 0 0 1-2 0V4.231a2.846 2.846 0 0 1 4.692-2.166A2.846 2.846 0 0 1 9.385 4.23v5.538a.846.846 0 0 0 1.689.074a1 1 0 0 1-.627-1.704l.918-.918a1 1 0 0 1 .712-.298a1 1 0 0 1 .707.293l.923.923a1 1 0 0 1-.631 1.704a2.847 2.847 0 0 1-5.691-.074V4.231a.846.846 0 0 0-1.693-.004V9.77a1 1 0 0 1-2 0V4.231a.846.846 0 0 0-.846-.846" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineZodiac1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
