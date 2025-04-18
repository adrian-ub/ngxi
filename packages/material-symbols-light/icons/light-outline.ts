import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLightOutlineIcon],svg[material-symbols-light-light-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19.077q-1.285 0-2.18-.896T8.922 16H5q-.413 0-.706-.294T4 15q0-3.134 2.166-5.47T11.5 7.012V4.385h1v2.627q3.17.182 5.335 2.518T20 15q0 .413-.294.706T19 16h-3.923q0 1.285-.896 2.18T12 19.078M5 15h14q0-2.9-2.05-4.95T12 8t-4.95 2.05T5 15m7.005 3.077q.859 0 1.465-.61T14.077 16H9.923q0 .864.612 1.47t1.47.607M12 16"></svg:path>`,
})
export class MaterialSymbolsLightLightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
