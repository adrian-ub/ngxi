import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedNsbtIcon],svg[token-branded-nsbt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#6A53F3" fill-rule="evenodd" d="m21 12l-9-9l-9 9l9 9zM9.5 16h-1v-3.5h-2v-1h2V8h1l5 6.28V8h1v3.5h2v1h-2V16h-1l-5-6.245z" clip-rule="evenodd"></svg:path><svg:path fill="#5428DB" d="M9.5 16h-1v-3.5h-2v-1h2v-.894a4.3 4.3 0 0 0-.895-.106C5.355 10.5 3 12 3 12l9 9l8.975-8.97c-.3.17-2.045.97-4.645.97q-.406-.001-.83-.062v3.061h-1l-3.707-4.63a24 24 0 0 0-1.293-.483z"></svg:path><svg:path fill="#5428DB" d="m12.832 12.183l1.67 2.096V12.73a17 17 0 0 1-1.67-.547"></svg:path></svg:g>`,
})
export class TokenBrandedNsbtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
