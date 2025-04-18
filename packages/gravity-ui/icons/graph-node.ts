import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiGraphNodeIcon],svg[gravity-ui-graph-node-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.75 2.5h4.5a1.5 1.5 0 0 1 1.269.7a2.5 2.5 0 0 0 .231 4.686V12a1.5 1.5 0 0 1-1.5 1.5h-4.5c-.534 0-1.003-.28-1.269-.7a2.5 2.5 0 0 0-.231-4.686v-.228A2.501 2.501 0 0 0 4.481 3.2c.266-.42.735-.7 1.269-.7m-3 5.614v-.228a2.501 2.501 0 0 1 .146-4.812A3 3 0 0 1 5.75 1h4.5a3 3 0 0 1 2.854 2.074a2.501 2.501 0 0 1 .146 4.812V12a3 3 0 0 1-3 3h-4.5a3 3 0 0 1-2.854-2.073a2.501 2.501 0 0 1-.146-4.813M3.5 11.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-1-6a1 1 0 1 1 2 0a1 1 0 0 1-2 0m10-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiGraphNodeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
