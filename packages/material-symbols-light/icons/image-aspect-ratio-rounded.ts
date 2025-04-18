import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightImageAspectRatioRoundedIcon],svg[material-symbols-light-image-aspect-ratio-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm2.387-7q.345 0 .575-.233t.23-.578t-.234-.574t-.577-.23t-.575.233t-.23.578t.233.574t.578.23m3.808 0q.345 0 .575-.233t.23-.578t-.234-.575t-.578-.23t-.574.234t-.23.578t.233.574t.578.23m3.808 0q.345 0 .574-.233q.23-.233.23-.578t-.233-.575t-.578-.23t-.574.234t-.23.578t.233.574t.578.23m0 3.808q.345 0 .574-.234t.23-.577t-.233-.575t-.578-.23t-.574.233t-.23.578t.233.575t.578.23"></svg:path>`,
})
export class MaterialSymbolsLightImageAspectRatioRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
