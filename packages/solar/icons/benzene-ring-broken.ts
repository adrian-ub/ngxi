import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBenzeneRingBrokenIcon],svg[solar-benzene-ring-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M7.02 6.638c-.985.586-1.479.88-1.75 1.362S5 9.069 5 10.241v3.518c0 1.172 0 1.758.27 2.241c.271.483.765.776 1.75 1.362l2.96 1.759c.986.586 1.479.879 2.02.879s1.034-.293 2.02-.88l2.96-1.758c.985-.586 1.479-.88 1.75-1.362c.25-.448.269-.986.27-2M9.98 4.88C10.965 4.292 11.458 4 12 4s1.034.293 2.02.88l2.96 1.758c.985.586 1.479.88 1.75 1.362c.25.448.269.986.27 2"></svg:path><svg:path stroke-linejoin="round" d="M5 8L2 6m17 2l3-2M5 16l-3 2"></svg:path><svg:path d="m12 16.884l4-2.384"></svg:path></svg:g>`,
})
export class SolarBenzeneRingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
