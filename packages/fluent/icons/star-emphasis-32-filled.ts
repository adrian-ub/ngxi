import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStarEmphasis32FilledIcon],svg[fluent-star-emphasis-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.348 3.84c-.549-1.12-2.144-1.12-2.693 0l-3.2 6.52l-7.17 1.05c-1.228.179-1.72 1.686-.834 2.555l5.196 5.096l-1.225 7.183c-.209 1.227 1.08 2.16 2.18 1.578l6.4-3.385l6.398 3.385c1.1.582 2.39-.351 2.18-1.578l-1.224-7.183l5.195-5.096c.886-.87.394-2.376-.833-2.556l-7.171-1.048zM2.293 5.162a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414m23 3a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0-1.414-1.414zm-23 16.414a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0m23-4.414a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414"></svg:path>`,
})
export class FluentStarEmphasis32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
