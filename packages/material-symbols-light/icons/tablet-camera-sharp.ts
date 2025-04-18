import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTabletCameraSharpIcon],svg[material-symbols-light-tablet-camera-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19V5h20v14h-3.5V6h-13v13zm6.154 2v-5.98h2.135l.865-.866h1.692l.857.865h2.143V21zM12 19.5q.61 0 1.055-.445t.445-1.058t-.445-1.045T12 16.519t-1.055.433t-.445 1.045t.445 1.058T12 19.5"></svg:path>`,
})
export class MaterialSymbolsLightTabletCameraSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
