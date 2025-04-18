import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTomlIcon],svg[tabler-toml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.499 8h3m-1.5 0v8M8.5 8A1.5 1.5 0 0 1 10 9.5v5a1.5 1.5 0 0 1-3 0v-5A1.5 1.5 0 0 1 8.5 8m4.5 8V8l2 5l2-5v8m3-8v8h2.5"></svg:path>`,
})
export class TablerTomlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
