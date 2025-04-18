import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsSadIcon],svg[rivet-icons-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"></svg:path><svg:path d="M11 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0M7 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2.742 5.152a1 1 0 0 0 1.526-1.292l-.001-.002l-.001-.001l-.003-.004l-.007-.008l-.018-.02a3 3 0 0 0-.225-.224a4 4 0 0 0-.623-.458A4.6 4.6 0 0 0 8 8.5a4.6 4.6 0 0 0-2.39.643a4 4 0 0 0-.795.624l-.053.057l-.018.021l-.007.008l-.003.004v.001l-.002.001a1 1 0 0 0 1.526 1.293l.005-.005q.014-.016.062-.06a2 2 0 0 1 .314-.23A2.6 2.6 0 0 1 8 10.5c.624 0 1.073.185 1.36.357a2 2 0 0 1 .382.295"></svg:path></svg:g>`,
})
export class RivetIconsSadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
