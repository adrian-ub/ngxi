import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsNotebookDuotoneLineIcon],svg[lets-icons-notebook-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.2"><svg:rect width="13" height="17" x="6" y="4" fill="currentColor" fill-opacity=".25" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M15 10V8M4 9h4m-4 4h4m-4 4h4"></svg:path></svg:g>`,
})
export class LetsIconsNotebookDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
