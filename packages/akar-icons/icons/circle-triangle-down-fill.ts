import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsCircleTriangleDownFillIcon],svg[akar-icons-circle-triangle-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1m-3.2 9a.81.81 0 0 0-.705.396a.71.71 0 0 0 .04.77l3.2 4.5A.82.82 0 0 0 12 16a.82.82 0 0 0 .666-.334l3.2-4.5a.71.71 0 0 0 .04-.77A.81.81 0 0 0 15.2 10z" clip-rule="evenodd"></svg:path>`,
})
export class AkarIconsCircleTriangleDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
