import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineOnlineMedicalServiceMonitorIcon],svg[streamline-online-medical-service-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13 1.25H1a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5m-7 9l-1 2.5m3-2.5l1 2.5m-5 0h6"></svg:path><svg:path d="M6.302 2.986a.43.43 0 0 0-.43.43v1.207H4.666a.43.43 0 0 0-.43.43v1.395c0 .237.193.43.43.43h1.208v1.207c0 .237.192.43.43.43h1.395a.43.43 0 0 0 .43-.43V6.877h1.207a.43.43 0 0 0 .43-.43V5.053a.43.43 0 0 0-.43-.43H8.127V3.416a.43.43 0 0 0-.43-.43H6.303Z"></svg:path></svg:g>`,
})
export class StreamlineOnlineMedicalServiceMonitorIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
