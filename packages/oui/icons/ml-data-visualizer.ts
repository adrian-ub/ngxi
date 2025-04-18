import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiMlDataVisualizerIcon],svg[oui-ml-data-visualizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20v10h10v2H0V20zm30 0v12H20v-2h10V20zM12 4a8 8 0 1 1 0 16a8 8 0 0 1 0-16m0 2a6 6 0 1 0 0 12a6 6 0 0 0 0-12m0-6v2H2v10H0V0zm20 0v12h-2V2H20V0z"></svg:path><svg:path fill="currentColor" d="M21.997 12.251q-.027 1.035-.253 2.006a6 6 0 1 1-7.487 7.487q-.97.226-2.006.253a8 8 0 1 0 9.746-9.746" class="ouiIcon__fillSecondary"></svg:path>`,
})
export class OuiMlDataVisualizerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
