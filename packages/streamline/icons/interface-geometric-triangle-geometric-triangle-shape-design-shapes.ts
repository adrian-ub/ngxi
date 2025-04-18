import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceGeometricTriangleGeometricTriangleShapeDesignShapesIcon],svg[streamline-interface-geometric-triangle-geometric-triangle-shape-design-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.46 2a.55.55 0 0 0-.92 0l-6 9.5a.5.5 0 0 0 0 .5a.54.54 0 0 0 .46.25h12a.54.54 0 0 0 .46-.25a.5.5 0 0 0 0-.5Z"></svg:path>`,
})
export class StreamlineInterfaceGeometricTriangleGeometricTriangleShapeDesignShapesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
