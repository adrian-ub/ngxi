import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mingcuteMoneroFillIcon],svg[mingcute-monero-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M15 11.533V15a1 1 0 0 0 .883.993L16 16h5.168A10 10 0 0 1 12 22a10 10 0 0 1-9.048-5.737L2.832 16H8a1 1 0 0 0 .993-.883L9 15v-3.467l2.148 3.491a1 1 0 0 0 1.63.105l.074-.105zM12 2c5.523 0 10 4.477 10 10q0 .823-.129 1.61L21.8 14H17V8a1 1 0 0 0-1.782-.623l-.07.099L12 12.592L8.852 7.476a1 1 0 0 0-1.845.403L7 8v6H2.2q-.198-.97-.2-2C2 6.477 6.477 2 12 2"></svg:path></svg:g>`,
})
export class MingcuteMoneroFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
