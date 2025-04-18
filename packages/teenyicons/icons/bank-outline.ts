import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBankOutlineIcon],svg[teenyicons-bank-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.5.5l.224-.447a.5.5 0 0 0-.448 0zM0 15h15v-1H0zM7.276.053l-6 3l.448.894l6-3zM0 6h15V5H0zm13.724-2.947l-6-3l-.448.894l6 3zM5 8v4h1V8zm4 0v4h1V8zM1 5.5v9h1v-9zm12 0v9h1v-9z"></svg:path>`,
})
export class TeenyiconsBankOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
