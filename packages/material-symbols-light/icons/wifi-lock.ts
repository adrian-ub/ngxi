import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWifiLockIcon],svg[material-symbols-light-wifi-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19.577L1.423 9q2.183-1.964 4.91-2.982Q9.063 5 12 5t5.666 1.018Q20.394 7.037 22.577 9l-1.821 1.821q-.479-.179-.99-.268q-.51-.09-1.03-.09q-2.42 0-4.122 1.703q-1.702 1.701-1.702 4.123q0 .52.089 1.03q.09.51.268.989zm4.39 0q-.392 0-.66-.265q-.268-.266-.268-.658v-2.697q0-.382.265-.65t.658-.268h.096v-1q0-.748.51-1.26q.511-.51 1.259-.51t1.259.51t.51 1.26v1h.097q.375 0 .63.265q.254.265.254.658v2.696q0 .383-.265.65q-.265.269-.657.269zm.86-4.539h2v-1q0-.425-.288-.712t-.712-.288t-.712.288t-.288.712z"></svg:path>`,
})
export class MaterialSymbolsLightWifiLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
