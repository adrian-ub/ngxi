import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeFaceSmileIcon],svg[prime-face-smile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 12a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18m-2.75 7.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M16 9.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m-7.3 4.476l-.004-.008a.75.75 0 0 0-1.391.56L8 14c-.696.278-.696.279-.696.28l.001.002l.002.004l.004.011a2 2 0 0 0 .063.138a5.3 5.3 0 0 0 .97 1.345c.74.739 1.922 1.47 3.656 1.47s2.917-.731 3.655-1.47a5.2 5.2 0 0 0 .785-1.003a5 5 0 0 0 .249-.48l.004-.011l.002-.004v-.002h.001c0-.001 0-.002-.696-.28l.696.278a.75.75 0 0 0-1.39-.56l-.004.008l-.025.054a3.8 3.8 0 0 1-.682.94c-.512.511-1.33 1.03-2.595 1.03s-2.083-.519-2.595-1.03a3.8 3.8 0 0 1-.681-.94z" clip-rule="evenodd"></svg:path>`,
})
export class PrimeFaceSmileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
