import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBitcoinPresentationIcon],svg[hugeicons-bitcoin-presentation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 19v3m9-20H3c-.471 0-.707 0-.854.146C2 2.293 2 2.53 2 3v1c0 .471 0 .707.146.854C2.293 5 2.53 5 3 5h18c.471 0 .707 0 .854-.146C22 4.707 22 4.47 22 4V3c0-.471 0-.707-.146-.854C21.707 2 21.47 2 21 2M3 5v8c0 2.828 0 4.243.879 5.121C4.757 19 6.172 19 9 19h6c2.828 0 4.243 0 5.121-.879C21 17.243 21 15.828 21 13V5m-7 5h2m-2 4h4"></svg:path><svg:path d="M6.938 14.667V9.333m1.562 0V8m0 8v-1.333M6.938 12h3.125m0 0c.517 0 .937.448.937 1v.667c0 .552-.42 1-.937 1H6M10.063 12c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H6"></svg:path></svg:g>`,
})
export class HugeiconsBitcoinPresentationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
