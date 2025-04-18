import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMediaBluetoothOnIcon],svg[material-symbols-media-bluetooth-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21q-1.65 0-2.825-1.175T3 17t1.175-2.825T7 13q.575 0 1.063.138T9 13.55V3h6v4h-4v10q0 1.65-1.175 2.825T7 21m10 0v-4.55l-2.75 2.75l-.85-.85L16.75 15l-3.4-3.35l.85-.85l2.75 2.75V9h.6L21 12.45L18.4 15l2.6 2.55L17.6 21zm1.15-2.3l1.15-1.15l-1.15-1.1zm0-5.15l1.15-1.1l-1.15-1.15z"></svg:path>`,
})
export class MaterialSymbolsMediaBluetoothOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
