import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeBubbleIcon],svg[icomoon-free-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1c4.418 0 8 2.91 8 6.5S12.418 14 8 14q-.637 0-1.247-.079C5.035 15.639 2.983 15.948 1 15.993v-.421c1.071-.525 2-1.48 2-2.572a3 3 0 0 0-.034-.448C1.157 11.36 0 9.54 0 7.5C0 3.91 3.582 1 8 1"></svg:path>`,
})
export class IcomoonFreeBubbleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
