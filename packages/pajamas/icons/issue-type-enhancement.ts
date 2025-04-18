import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasIssueTypeEnhancementIcon],svg[pajamas-issue-type-enhancement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.75.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0zm4.03 2.53a.75.75 0 1 0-1.06-1.06l-1.5 1.5a.75.75 0 1 0 1.06 1.06zM8.293 4.646a1 1 0 0 1 1.414 0l1.647 1.647a1 1 0 0 1 0 1.414l-7.99 7.99a1 1 0 0 1-1.415 0L.303 14.051a1 1 0 0 1 0-1.414l7.99-7.99ZM9 6.061L7.06 8l.94.94L9.94 7L9 6.06Zm-7.283 7.283L6 9.06l.94.939l-4.284 4.283l-.94-.94ZM13 7a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 13 7m.78 4.78a.75.75 0 0 0 0-1.06l-1.5-1.5a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06 0m-9.56-8.5a.75.75 0 0 1 1.06-1.06l1.5 1.5a.75.75 0 0 1-1.06 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasIssueTypeEnhancementIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
