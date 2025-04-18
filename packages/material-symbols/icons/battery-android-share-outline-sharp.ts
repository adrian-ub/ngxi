import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBatteryAndroidShareOutlineSharpIcon],svg[material-symbols-battery-android-share-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15.75h2v-3h4.175l-1.1 1.075L12.5 15.25l3.5-3.5l-3.5-3.5l-1.4 1.4l1.075 1.1H6zm-2 1h14v-9.5H4zm-2 2V5.25h18V9.5h2v5h-2v4.25zm2-2v-9.5z"></svg:path>`,
})
export class MaterialSymbolsBatteryAndroidShareOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
