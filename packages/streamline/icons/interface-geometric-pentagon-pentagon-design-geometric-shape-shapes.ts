import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceGeometricPentagonPentagonDesignGeometricShapeShapesIcon],svg[streamline-interface-geometric-pentagon-pentagon-design-geometric-shape-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 6L7 .5L.5 6l3 7.5h7l3-7.5z"></svg:path>`,
})
export class StreamlineInterfaceGeometricPentagonPentagonDesignGeometricShapeShapesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
