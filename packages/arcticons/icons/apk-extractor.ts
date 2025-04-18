import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsApkExtractorIcon],svg[arcticons-apk-extractor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 14.5h37v27h-37zm0 0l5-8h27l5 8M24 6.5v12"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.314 32.221a1.613 1.613 0 1 1 1.614-1.613a1.613 1.613 0 0 1-1.614 1.613m9.39 0a1.613 1.613 0 1 1 1.613-1.613a1.613 1.613 0 0 1-1.613 1.613"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 22.289a11.5 11.5 0 0 1 11.5 11.5v1.641h0h-23h0v-1.641a11.5 11.5 0 0 1 11.5-11.5m-9.931-1.719l3.268 3.845m16.594-3.845l-3.268 3.845"></svg:path>`,
})
export class ArcticonsApkExtractorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
