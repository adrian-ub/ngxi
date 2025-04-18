import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPrestoIcon],svg[arcticons-presto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 26.933v-5.866h1.907c1.1 0 1.98.88 1.98 1.98s-.88 1.98-1.98 1.98H9.5m5.469 1.906v-5.866h1.906c1.1 0 1.98.88 1.98 1.98s-.88 1.98-1.98 1.98H14.97m1.977-.002l1.835 1.835m11.073-5.793h3.813m-1.907 5.866v-5.866m-7.091 5.206c.367.44.807.66 1.467.66h.88a1.47 1.47 0 0 0 1.467-1.466h0A1.47 1.47 0 0 0 27.017 24h-.953a1.47 1.47 0 0 1-1.467-1.466h0c0-.807.66-1.467 1.467-1.467h.88c.66 0 1.1.147 1.467.66M20.504 24h1.907m1.026 2.933h-2.933v-5.866h2.933m13.083 5.866c-1.1 0-1.907-.88-1.907-1.906v-1.98c0-1.1.88-1.98 1.907-1.98h0c1.1 0 1.98.88 1.98 1.98v1.906c0 1.1-.88 1.98-1.98 1.98"></svg:path>`,
})
export class ArcticonsPrestoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
