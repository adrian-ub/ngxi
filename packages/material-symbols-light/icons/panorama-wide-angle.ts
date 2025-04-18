import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPanoramaWideAngleIcon],svg[material-symbols-light-panorama-wide-angle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19q-2.236 0-4.268-.213t-3.924-.671q-.43-1.495-.619-3.02Q3 13.568 3 12t.19-3.095t.618-3.02q1.84-.443 3.863-.664T12 5t4.329.221t3.863.664q.43 1.494.619 3.02T21 12t-.192 3.095t-.616 3.02q-1.892.46-3.924.673T12 19"></svg:path>`,
})
export class MaterialSymbolsLightPanoramaWideAngleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
