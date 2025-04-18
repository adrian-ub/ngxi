import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsBluetoothIcon],svg[simple-icons-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0C6.76 0 3.148 2.49 3.148 12S6.76 24 12 24s8.852-2.49 8.852-12S17.24 0 12 0m-.777 1.682l6.214 6.215L13.335 12l4.104 4.104l-6.215 6.214v-8.193l-3.418 3.42l-1.243-1.244L10.853 12l-4.29-4.3l1.243-1.245l3.418 3.42zm1.748 4.244v3.969l1.984-1.985zm0 8.181v3.967l1.984-1.984z"></svg:path>`,
})
export class SimpleIconsBluetoothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
