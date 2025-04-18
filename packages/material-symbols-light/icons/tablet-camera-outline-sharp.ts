import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTabletCameraOutlineSharpIcon],svg[material-symbols-light-tablet-camera-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19V5h20v14h-3.5V6h-13v13zm1-1h1.5V6H3zm16.5 0H21V6h-1.5zM8.154 21v-5.98h2.135l.865-.866h1.692l.857.865h2.143V21zM12 19.5q.61 0 1.055-.445t.445-1.058t-.445-1.045T12 16.519t-1.055.433t-.445 1.045t.445 1.058T12 19.5M3 6h1.5zm16.5 0H21z"></svg:path>`,
})
export class MaterialSymbolsLightTabletCameraOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
