import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibOracleIcon],svg[cib-oracle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.88 5.88H10.125C4.536 5.88.005 10.407 0 15.995c-.005 5.589 4.527 10.12 10.115 10.125H21.88C27.469 26.12 32 21.588 32 16S27.469 5.88 21.88 5.88m-.255 16.672H10.38c-8.563-.172-8.563-12.932 0-13.104h11.245c8.735 0 8.735 13.104 0 13.104"></svg:path>`,
})
export class CibOracleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
