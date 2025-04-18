import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBracesVariable24FilledIcon],svg[fluent-braces-variable-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 0 1 3-3a1 1 0 0 1 0 2a1 1 0 0 0-1 1v3.938c0 .789-.307 1.519-.82 2.062c.513.543.82 1.273.82 2.062V18a1 1 0 0 0 1 1a1 1 0 1 1 0 2a3 3 0 0 1-3-3v-3.938a1 1 0 0 0-.757-.97l-.486-.122a1 1 0 0 1 0-1.94l.486-.121A1 1 0 0 0 3 9.939zm18 0a3 3 0 0 0-3-3a1 1 0 1 0 0 2a1 1 0 0 1 1 1v3.938c0 .789.307 1.519.82 2.062a3 3 0 0 0-.82 2.062V18a1 1 0 0 1-1 1a1 1 0 1 0 0 2a3 3 0 0 0 3-3v-3.938a1 1 0 0 1 .758-.97l.485-.122a1 1 0 0 0 0-1.94l-.485-.121a1 1 0 0 1-.758-.97zm-11.71.886a1 1 0 1 0-1.58 1.228L10.734 12l-3.022 3.886a1 1 0 1 0 1.578 1.228L12 13.629l2.71 3.485a1 1 0 0 0 1.58-1.228L13.266 12l3.022-3.886a1 1 0 0 0-1.578-1.228L12 10.371z"></svg:path>`,
})
export class FluentBracesVariable24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
