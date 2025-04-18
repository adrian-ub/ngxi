import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsNotebookIcon],svg[lets-icons-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:rect width="13" height="17" x="6" y="4" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M15 10V8M4 9h4m-4 4h4m-4 4h4"></svg:path></svg:g>`,
})
export class LetsIconsNotebookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
