import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTabletConnectedBluetoothIcon],svg[hugeicons-tablet-connected-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m17.356 12.051l2.769 1.91c.582.402.874.604.875.87c.001.267-.288.47-.866.876l-.576.405c-.953.67-1.43 1.004-1.816.852s-.386-.676-.386-1.721zm0 0L17.28 12m.075.051v-.102M17.28 12L14 9.736M17.281 12l.075-.051M17.28 12L14 14.264m3.356-2.315l2.769-1.91c.582-.403.874-.603.875-.87s-.288-.47-.866-.876l-.576-.405c-.953-.67-1.43-1.004-1.816-.852s-.386.676-.386 1.721z"></svg:path><svg:path d="M21 19.682C19.66 21 17.502 21 13.187 21h-2.034c-4.315 0-6.472 0-7.813-1.318S2 16.242 2 12s0-6.364 1.34-7.682S6.838 3 11.153 3h2.034C17.502 3 19.66 3 21 4.318M6.5 3.5v17"></svg:path></svg:g>`,
})
export class HugeiconsTabletConnectedBluetoothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
