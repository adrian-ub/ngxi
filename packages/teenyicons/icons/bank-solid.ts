import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBankSolidIcon],svg[teenyicons-bank-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.724.053a.5.5 0 0 0-.448 0l-6 3l.448.894L7.5 1.06l5.776 2.888l.448-.894z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14 6h1V5H0v1h1v8H0v1h15v-1h-1zm-9 6V8h1v4zm4 0V8h1v4z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsBankSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
