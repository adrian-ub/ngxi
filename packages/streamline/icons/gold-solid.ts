import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineGoldSolidIcon],svg[streamline-gold-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.058 1.248h-2.08A1.39 1.39 0 0 0 4.59 2.362v.004l-.733 3.75a.5.5 0 0 0 .491.596h5.357a.5.5 0 0 0 .49-.598l-.75-3.75v-.002a1.39 1.39 0 0 0-1.387-1.115Zm-3.795 6.85h-2.08A1.39 1.39 0 0 0 .796 9.214l-.001.004l-.732 3.75a.5.5 0 0 0 .49.596h5.358a.5.5 0 0 0 .49-.598l-.75-3.75v-.002A1.39 1.39 0 0 0 4.263 8.1Zm5.51 0h2.08a1.39 1.39 0 0 1 1.387 1.115v.002l.75 3.75a.5.5 0 0 1-.49.598H8.143a.5.5 0 0 1-.49-.596l.731-3.75l.001-.004a1.39 1.39 0 0 1 1.387-1.114Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGoldSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
