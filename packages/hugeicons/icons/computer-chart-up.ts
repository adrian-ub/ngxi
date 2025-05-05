import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerChartUpIcon],svg[hugeicons-computer-chart-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 21h2m-2 0a1.5 1.5 0 0 1-1.5-1.5V17H12m2 4h-4m0 0H8m2 0a1.5 1.5 0 0 0 1.5-1.5V17h.5m0 0v4m4-18H8c-2.828 0-4.243 0-5.121.879C2 4.757 2 6.172 2 9v2c0 2.828 0 4.243.879 5.121C3.757 17 5.172 17 8 17h8c2.828 0 4.243 0 5.121-.879C22 15.243 22 13.828 22 11V9c0-2.828 0-4.243-.879-5.121C20.243 3 18.828 3 16 3"></svg:path><svg:path d="m16 8l-2.5 2.5c-.273.273-.409.409-.556.482a1 1 0 0 1-.888 0c-.147-.073-.283-.21-.556-.482c-.273-.273-.409-.409-.556-.482a1 1 0 0 0-.888 0c-.147.073-.283.21-.556.482L7 13m7-6h1.714c.606 0 .91 0 1.098.188c.188.189.188.492.188 1.098V10"></svg:path></svg:g>`,
})
export class HugeiconsComputerChartUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
