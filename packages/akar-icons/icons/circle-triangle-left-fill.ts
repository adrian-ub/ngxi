import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsCircleTriangleLeftFillIcon],svg[akar-icons-circle-triangle-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1m2 7.8a.81.81 0 0 0-.396-.705a.71.71 0 0 0-.77.04l-4.5 3.2A.82.82 0 0 0 8 12c0 .268.125.517.334.666l4.5 3.2a.71.71 0 0 0 .77.04A.81.81 0 0 0 14 15.2z" clip-rule="evenodd"></svg:path>`,
})
export class AkarIconsCircleTriangleLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
