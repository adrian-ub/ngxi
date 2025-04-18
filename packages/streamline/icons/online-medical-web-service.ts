import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineOnlineMedicalWebServiceIcon],svg[streamline-online-medical-web-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 3.494h13M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path><svg:path d="M6.303 5.735a.43.43 0 0 0-.43.43v1.207H4.666a.43.43 0 0 0-.43.43v1.395c0 .237.193.43.43.43h1.207v1.207c0 .237.193.43.43.43h1.395a.43.43 0 0 0 .43-.43V9.627h1.207a.43.43 0 0 0 .43-.43V7.802a.43.43 0 0 0-.43-.43H8.128V6.165a.43.43 0 0 0-.43-.43z"></svg:path></svg:g>`,
})
export class StreamlineOnlineMedicalWebServiceIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
