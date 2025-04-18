import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLodluIcon],svg[arcticons-lodlu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.5 13.976v15.718c0 3.127 2.24 4.28 4.824 4.28h12.54"></svg:path><svg:path d="M15.246 23.671v6.757c0 2.225 2.82 3.545 5.522 3.545h2.98c2.93 0 5.633-2.174 5.633-3.852v-6.636c0-2.263-2.475-4.448-5.349-4.448h-3.653c-2.891 0-5.133 2.21-5.133 4.634m24.638-4.728h-4.982c-3.461 0-5.52 2.184-5.52 4.026v7.224c0 .892.747 3.973 7.062 3.973s7.056-3.673 7.056-4.25V13.834"></svg:path></svg:g>`,
})
export class ArcticonsLodluIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
