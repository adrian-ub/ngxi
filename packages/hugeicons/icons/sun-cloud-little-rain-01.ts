import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSunCloudLittleRain01Icon],svg[hugeicons-sun-cloud-little-rain-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.478 9.045h.022c2.485 0 4.5 2.03 4.5 4.534c0 1.78-1.018 3.18-2.5 3.921m-2.022-8.455a6 6 0 0 0 .022-.504C17.5 5.481 15.038 3 12 3C9.123 3 6.762 5.225 6.52 8.06m10.958.985a5.54 5.54 0 0 1-1.235 3.022M6.52 8.06C3.984 8.303 2 10.456 2 13.075A5.04 5.04 0 0 0 4.609 17.5M6.52 8.06q.237-.023.48-.023c1.126 0 2.165.375 3 1.008"></svg:path><svg:path d="M9 3.655A3.84 3.84 0 0 0 5.844 2A3.85 3.85 0 0 0 2 5.857C2 7.154 2.638 8.3 3.616 9m8.385 5.5V16M9 17.5V19m6-1.5V19m-8.5 1.5V22m11-1.5V22M12 20.5V22"></svg:path></svg:g>`,
})
export class HugeiconsSunCloudLittleRain01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
