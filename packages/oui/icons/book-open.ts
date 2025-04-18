import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiBookOpenIcon],svg[oui-book-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.667 14v1.333H7.333V14H2a.667.667 0 0 1-.667-.667V2.666C1.333 2.298 1.632 2 2 2h4a2.66 2.66 0 0 1 2 .902A2.66 2.66 0 0 1 10 2h4c.368 0 .667.298.667.666v10.667A.667.667 0 0 1 14 14zm4.666-1.333V3.333H10c-.736 0-1.333.597-1.333 1.334v8zm-6 0v-8c0-.737-.597-1.334-1.333-1.334H2.667v9.334z"></svg:path>`,
})
export class OuiBookOpenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
