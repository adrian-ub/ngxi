import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiWsSecurityAnalyticsIcon],svg[oui-ws-security-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 .5l5.602 1.245c.312.07.534.346.534.666V9.22a4.09 4.09 0 0 1-1.821 3.403L8 15.5l-4.315-2.877A4.09 4.09 0 0 1 1.864 9.22V2.41c0-.319.222-.596.534-.665zm0 1.397l-4.773 1.06V9.22c0 .912.456 1.763 1.215 2.269L8 13.86l3.558-2.372a2.73 2.73 0 0 0 1.215-2.27V2.959L8 1.896ZM8 4.59a1.364 1.364 0 0 1 .683 2.544l-.001 2.91H7.318v-2.91A1.363 1.363 0 0 1 8 4.592Z"></svg:path>`,
})
export class OuiWsSecurityAnalyticsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
