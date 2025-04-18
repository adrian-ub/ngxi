import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTwinTowerIcon],svg[hugeicons-twin-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m9 19l3-4l3 4m-6-5h6M2 22v-8c0-.943 0-1.414.293-1.707S3.057 12 4 12h3c.943 0 1.414 0 1.707.293S9 13.057 9 14v8M3 12v-2c0-.943 0-1.414.293-1.707S4.057 8 5 8h1c.943 0 1.414 0 1.707.293S8 9.057 8 10v2"></svg:path><svg:path d="M4 8V5.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C4.801 4 5.034 4 5.5 4s.699 0 .883.076a1 1 0 0 1 .54.541C7 4.801 7 5.034 7 5.5V8m8 14v-8c0-.943 0-1.414.293-1.707S16.057 12 17 12h3c.943 0 1.414 0 1.707.293S22 13.057 22 14v8M2 22h20M5.5 4V2M16 12v-2c0-.943 0-1.414.293-1.707S17.057 8 18 8h1c.943 0 1.414 0 1.707.293S21 9.057 21 10v2"></svg:path><svg:path d="M17 8V5.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C17.801 4 18.034 4 18.5 4s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883V8m-1.5-4V2m-13 20v-2m13 2v-2"></svg:path></svg:g>`,
})
export class HugeiconsTwinTowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
