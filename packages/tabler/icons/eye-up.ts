import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEyeUpIcon],svg[tabler-eye-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></svg:path><svg:path d="M12 18q-5.4 0-9-6q3.6-6 9-6t9 6q-.135.224-.27.439M19 22v-6m3 3l-3-3l-3 3"></svg:path></svg:g>`,
})
export class TablerEyeUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
