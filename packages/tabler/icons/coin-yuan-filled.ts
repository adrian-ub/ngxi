import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCoinYuanFilledIcon],svg[tabler-coin-yuan-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-1.445 3.828a1 1 0 0 0-1.387.277L12 10.696l-2.168-3.25a1 1 0 0 0-1.286-.337l-.1.059a1 1 0 0 0-.278 1.387L10.464 12H9a1 1 0 0 0-.993.883L8 13a1 1 0 0 0 1 1h2v3a1 1 0 0 0 .883.993L12 18l.117-.007A1 1 0 0 0 13 17v-3h2a1 1 0 0 0 .993-.883L16 13a1 1 0 0 0-1-1h-1.465l2.297-3.445a1 1 0 0 0-.184-1.317z"></svg:path>`,
})
export class TablerCoinYuanFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
