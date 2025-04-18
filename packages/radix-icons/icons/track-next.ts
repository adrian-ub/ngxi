import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsTrackNextIcon],svg[radix-icons-track-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.05 2.75a.55.55 0 1 0-1.1 0v4.533a.5.5 0 0 0-.217-.225l-9-4.75A.5.5 0 0 0 2 2.75v9.5a.5.5 0 0 0 .733.442l9-4.75a.5.5 0 0 0 .217-.225v4.533a.55.55 0 0 0 1.1 0zM3 11.42V3.58l7.429 3.92z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsTrackNextIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
