import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWomanIcon],svg[hugeicons-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.248 4.25c0 1.52 1.23 2.75 2.75 2.75s2.75-1.23 2.75-2.75s-1.23-2.75-2.75-2.75s-2.75 1.23-2.75 2.75m1.5 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m-.98 18.24c.51.51 1.16.51 2.23.51v-.01c1.07 0 1.72 0 2.24-.52c.51-.51.51-1.16.51-2.23v-3.25c1.47-.01 2.31-.08 2.78-.84c.54-.85.05-1.74-.77-3.21l-1.8-3.24c-.59-1.05-1.72-1.7-2.96-1.7s-2.37.66-2.96 1.71l-1.8 3.24l-.023.041c-.797 1.446-1.283 2.327-.748 3.169c.47.76 1.32.84 2.78.84v3.25c0 1.07 0 1.71.52 2.24m.58-12.05c.33-.58.96-.94 1.65-.94v.03c.7 0 1.33.35 1.65.93l1.8 3.24l.147.27c.34.621.68 1.244.662 1.41c-.17.14-1.138.14-1.998.14h-.262c-.41 0-.75.34-.75.75v4c0 .5 0 1.11-.07 1.18c-.22.14-2.15.13-2.35 0c-.08-.09-.08-.7-.08-1.19v-4c0-.41-.34-.75-.75-.75h-.262c-.86 0-1.828 0-1.988-.12c-.03-.22.41-1.01.8-1.71z" color="currentColor"></svg:path>`,
})
export class HugeiconsWomanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
