import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHealthMedicalRibbon1RibbonMedicalCancerHealthBeautySymbolIcon],svg[streamline-health-medical-ribbon-1-ribbon-medical-cancer-health-beauty-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 13.5S10 6.39 10 3.5a2.84 2.84 0 0 0-3-3a2.84 2.84 0 0 0-3 3c0 2.89 6.5 10 6.5 10"></svg:path>`,
})
export class StreamlineHealthMedicalRibbon1RibbonMedicalCancerHealthBeautySymbolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
