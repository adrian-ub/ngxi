import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSunCloudBigRain01Icon],svg[hugeicons-sun-cloud-big-rain-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 4.655A3.84 3.84 0 0 0 5.844 3A3.85 3.85 0 0 0 2 6.857C2 8.154 2.638 9.3 3.616 10"></svg:path><svg:path d="M17.478 10.01h.022c2.485 0 4.5 2.017 4.5 4.506A4.505 4.505 0 0 1 17.955 19m-.477-8.99q.021-.249.022-.502A5.504 5.504 0 0 0 12 4a5.504 5.504 0 0 0-5.48 5.03m10.958.98a5.5 5.5 0 0 1-1.235 3.004M6.52 9.03A5.005 5.005 0 0 0 2 14.015C2 16.438 3.718 18.536 6 19m.52-9.97q.237-.022.48-.022c1.126 0 2.165.372 3 1.001m-.5 9.494c0-1.255 1.053-2.495 1.792-3.211a1.004 1.004 0 0 1 1.416 0c.739.716 1.792 1.956 1.792 3.211C14.5 20.734 13.553 22 12 22s-2.5-1.266-2.5-2.497"></svg:path></svg:g>`,
})
export class HugeiconsSunCloudBigRain01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
