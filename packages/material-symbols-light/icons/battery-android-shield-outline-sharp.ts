import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBatteryAndroidShieldOutlineSharpIcon],svg[material-symbols-light-battery-android-shield-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15.27q1.348-.859 2.021-2.282q.673-1.425.787-3.011q-.76-.2-1.442-.54T11 8.731q-.684.367-1.366.707t-1.442.539q.114 1.587.777 3.03T11 15.269m0-1.058V9.77q.439.27.899.479q.46.21.943.398q-.188 1.021-.643 1.936T11 14.212M4 16.75h14.539v-9.5H4zm-1 1V6.25h16.539V10H21v4h-1.461v3.75zm1-1v-9.5z"></svg:path>`,
})
export class MaterialSymbolsLightBatteryAndroidShieldOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
