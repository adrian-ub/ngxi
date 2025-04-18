import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSatellite01Icon],svg[hugeicons-satellite-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.307 15.331c-3.521 3.521-9.173 3.577-12.694.056s-3.465-9.173.056-12.694m12.638 12.638c1.677-1.677.207-5.865-3.283-9.355S9.346 1.016 7.67 2.693m12.638 12.638c-1.677 1.677-5.866.207-9.355-3.282M7.669 2.693C5.992 4.37 7.462 8.56 10.952 12.05m0 0L14 9"></svg:path><svg:path d="m6.488 15l-1.737 2.488c-1.399 2.004-2.098 3.006-1.58 3.76C3.687 22 5.075 22 7.85 22h4.297c2.776 0 4.164 0 4.682-.753c.471-.686-.067-1.578-1.225-3.247"></svg:path></svg:g>`,
})
export class HugeiconsSatellite01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
