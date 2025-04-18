import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsUmbrellaIcon],svg[meteocons-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M304 355a24 24 0 0 1-48 0V156"></svg:path><svg:g><svg:path fill="#ef4444" d="M251.7 141c-64.3 2-115.7 44.2-115.7 96l12.7-5.8c18-8.3 41-8 58.5.5l7.8 3.8c-4.8-47.3 27.7-85 36.7-94.4Zm8.6 0c9 9.5 41.6 47.2 36.7 94.4l7.8-3.7a71.1 71.1 0 0 1 58.5-.6L376 237c0-51.9-51.4-94.1-115.7-96Z"></svg:path><svg:path fill="#ef4444" d="M256 145.3c-8.5 9-39.8 45.9-35 90.2l4-2a70.8 70.8 0 0 1 62 0l4 2c4.8-44.3-26.5-81.1-35-90.2Z"></svg:path><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; .9 1.1; 1 1"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 29 -14; 0 0"></svg:animatetransform></svg:g>`,
})
export class MeteoconsUmbrellaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
