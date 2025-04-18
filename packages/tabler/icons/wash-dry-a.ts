import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWashDryAIcon],svg[tabler-wash-dry-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="M9 16v-4.8C9 9.543 10.343 8 12 8s3 1.543 3 3.2V16m0-3H9"></svg:path></svg:g>`,
})
export class TablerWashDryAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
