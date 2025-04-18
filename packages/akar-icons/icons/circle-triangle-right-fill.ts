import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsCircleTriangleRightFillIcon],svg[akar-icons-circle-triangle-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1m-2 7.8c0-.295.152-.566.396-.705a.71.71 0 0 1 .77.04l4.5 3.2A.82.82 0 0 1 16 12a.82.82 0 0 1-.334.666l-4.5 3.2a.71.71 0 0 1-.77.04A.81.81 0 0 1 10 15.2z" clip-rule="evenodd"></svg:path>`,
})
export class AkarIconsCircleTriangleRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
