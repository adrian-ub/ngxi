import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMapFoldSolidIcon],svg[streamline-map-fold-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.875.865l-3.75-.75v13.02l3.75.75zm1.25 12.994l3.496-.874A.5.5 0 0 0 14 12.5V.5a.5.5 0 0 0-.621-.485l-3.254.813zM.379 1.015L3.875.14v13.03l-3.254.814A.5.5 0 0 1 0 13.5v-12a.5.5 0 0 1 .379-.485" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineMapFoldSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
