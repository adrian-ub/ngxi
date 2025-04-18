import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSunCloudSnow01Icon],svg[hugeicons-sun-cloud-snow-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 3.655A3.84 3.84 0 0 0 5.844 2A3.85 3.85 0 0 0 2 5.857C2 7.154 2.638 8.3 3.616 9"></svg:path><svg:path d="M17.478 9.01h.022c2.485 0 4.5 2.017 4.5 4.506c0 1.962-1.252 3.365-3 3.984m-1.522-8.49q.021-.249.022-.502A5.504 5.504 0 0 0 12 3a5.504 5.504 0 0 0-5.48 5.03m10.958.98a5.5 5.5 0 0 1-1.235 3.004M6.52 8.03A5.005 5.005 0 0 0 2 13.015C2 15.07 3.234 16.71 5 17.5m1.52-9.47q.237-.022.48-.022c1.126 0 2.165.372 3 1.001m1.998 8.988l.004.008M15.995 16l.005.008M8 16l.004.008m7.992 3.987l.004.008m-8-.008l.004.008m3.994 1.99l.004.007"></svg:path></svg:g>`,
})
export class HugeiconsSunCloudSnow01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
