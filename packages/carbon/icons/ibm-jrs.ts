import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmJrsIcon],svg[carbon-ibm-jrs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18h-2V6H7v12H5V4h7zm9 8h-2V12h-3v9.995h-2V10h7zm9 0h-2v-8h-3v8h-2V16h7zM4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8z"></svg:path>`,
})
export class CarbonIbmJrsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
