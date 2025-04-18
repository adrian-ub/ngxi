import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandBlenderIcon],svg[tabler-brand-blender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 14a6 5 0 1 0 12 0a6 5 0 1 0-12 0"></svg:path><svg:path d="M14 14a1 1 0 1 0 2 0a1 1 0 1 0-2 0M3 16l9-6.5M6 9h9m-2-4l5.65 5"></svg:path></svg:g>`,
})
export class TablerBrandBlenderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
