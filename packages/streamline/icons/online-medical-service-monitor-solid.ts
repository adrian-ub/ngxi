import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineOnlineMedicalServiceMonitorSolidIcon],svg[streamline-online-medical-service-monitor-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.457.252C.652.252 0 .904 0 1.709v7.586c0 .805.652 1.457 1.457 1.457h4.027l-.536 1.496H4a.75.75 0 0 0 0 1.5h6a.75.75 0 1 0 0-1.5h-.947l-.536-1.496h4.026c.805 0 1.457-.652 1.457-1.457V1.71c0-.805-.652-1.457-1.457-1.457zm4.53 2.66c0-.217.176-.392.393-.392h1.275c.217 0 .392.175.392.392v1.56h1.56c.217 0 .393.176.393.392V6.14a.39.39 0 0 1-.392.393h-1.56v1.56a.39.39 0 0 1-.393.392H6.38a.39.39 0 0 1-.392-.392v-1.56h-1.56a.39.39 0 0 1-.393-.393V4.864c0-.216.176-.392.392-.392h1.56z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineOnlineMedicalServiceMonitorSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
