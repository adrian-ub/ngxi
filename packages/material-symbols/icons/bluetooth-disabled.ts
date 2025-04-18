import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBluetoothDisabledIcon],svg[material-symbols-bluetooth-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.8 22.6l-4.2-4.2L12 22h-1v-7.6L6.4 19L5 17.6l4.9-4.9l-8.5-8.5l1.4-1.4l18.4 18.4zM13 18.15L14.15 17L13 15.85zm1.1-6.85l-1.4-1.4l2.2-2.2L13 5.85v4.35l-2-2V2h1l5.7 5.7z"></svg:path>`,
})
export class MaterialSymbolsBluetoothDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
