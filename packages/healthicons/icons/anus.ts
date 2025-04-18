import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAnusIcon],svg[healthicons-anus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M44.07 3.867v25.825l-.071.18c-2.601 6.502-6.872 9.678-11.047 10.304c-3.486.523-6.84-.765-8.784-3.256c-1.912 2.506-5.341 3.775-8.881 3.257c-4.259-.623-8.658-3.787-11.265-10.306l-.072-.178V3.976l17.202 16.29q.173-.088.38-.18c.618-.275 1.517-.586 2.468-.586s1.85.311 2.469.586q.205.09.378.18zM24.2 33.2c1.105 0 2-1.01 2-1.936s-.895-2.064-2-2.064s-2 1.138-2 2.065c0 .926.896 1.935 2 1.935" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsAnusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
