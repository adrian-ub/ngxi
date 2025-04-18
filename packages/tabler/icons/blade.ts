import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBladeIcon],svg[tabler-blade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m17.707 3.707l2.586 2.586a1 1 0 0 1 0 1.414l-.586.586a1 1 0 0 0 0 1.414l.586.586a1 1 0 0 1 0 1.414l-8.586 8.586a1 1 0 0 1-1.414 0l-.586-.586a1 1 0 0 0-1.414 0l-.586.586a1 1 0 0 1-1.414 0l-2.586-2.586a1 1 0 0 1 0-1.414l.586-.586a1 1 0 0 0 0-1.414l-.586-.586a1 1 0 0 1 0-1.414l8.586-8.586a1 1 0 0 1 1.414 0l.586.586a1 1 0 0 0 1.414 0l.586-.586a1 1 0 0 1 1.414 0M8 16l3.2-3.2m1.6-1.6L16 8m-2 0l2 2m-8 4l2 2"></svg:path><svg:path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path></svg:g>`,
})
export class TablerBladeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
