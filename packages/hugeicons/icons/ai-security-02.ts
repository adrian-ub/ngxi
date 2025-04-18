import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAiSecurity02Icon],svg[hugeicons-ai-security-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.998 2c-2.85 0-4.697 2.019-6.882 2.755c-.888.3-1.333.449-1.512.66c-.18.21-.233.519-.338 1.135c-1.127 6.596 1.336 12.694 7.209 15.068c.631.255.947.382 1.526.382s.896-.128 1.527-.383c5.873-2.373 8.333-8.471 7.206-15.067c-.106-.616-.158-.925-.338-1.136s-.624-.36-1.512-.659C16.698 4.019 14.848 2 11.998 2"></svg:path><svg:path d="m7.5 14.5l1.842-5.526a.694.694 0 0 1 1.316 0L12.5 14.5m3-6v6m-7-2h3"></svg:path></svg:g>`,
})
export class HugeiconsAiSecurity02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
