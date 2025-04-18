import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiError01Icon],svg[hugeicons-wifi-error-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18.5 9.998c-3.768-3.333-9-3.333-13 0"></svg:path><svg:path d="M2 6.999c6.316-5.332 13.684-5.332 20 0m-10.007 7.986v1.512m0 1.97v.032m.15-6.491c.35-.014 1.231.155 2.091 1.675l2.154 3.691c.822 1.218 1.227 3.404-1.801 3.568L11.999 21l-2.615-.074c-3.028-.164-2.562-2.332-1.801-3.567l2.153-3.692c.86-1.52 1.742-1.688 2.09-1.675z"></svg:path></svg:g>`,
})
export class HugeiconsWifiError01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
