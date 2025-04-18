import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBatteryAndroidShieldOutlineSharpIcon],svg[material-symbols-battery-android-shield-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15.75q1.675-.8 2.425-2.512t.825-3.588q-.875-.2-1.662-.587T11 8.25q-.8.425-1.588.813T7.75 9.65q.075 1.875.825 3.588T11 15.75M11 14v-4q.4.25.813.45t.837.35q-.15.925-.537 1.762T11 14m-7 2.75h14v-9.5H4zm-2 2V5.25h18V9.5h2v5h-2v4.25zm2-2v-9.5z"></svg:path>`,
})
export class MaterialSymbolsBatteryAndroidShieldOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
