import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingBrowserDashboardAppCodeAppsProgrammingWindowDashboardPerformanceIcon],svg[streamline-programming-browser-dashboard-app-code-apps-programming-window-dashboard-performance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M.5 3.5h13m-6.5 7L10.5 7m0 3.5h1M7 7V6M4.53 8.03l-.71-.71M3.5 10.5h-1"></svg:path></svg:g>`,
})
export class StreamlineProgrammingBrowserDashboardAppCodeAppsProgrammingWindowDashboardPerformanceIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
