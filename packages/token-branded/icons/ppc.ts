import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPpcIcon],svg[token-branded-ppc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3CB054" d="M4.688 3c11.798.45 16.342 7.7 14.05 14.18a6.95 6.95 0 0 1-2.78 3.82c.06-.26.127-.52.167-.79c.858-5.05-.761-11.13-8.678-14.49c6.298 3.85 8.843 10.7 5.898 15.12c-5.001.8-8.657-3.58-8.657-8.63z"></svg:path>`,
})
export class TokenBrandedPpcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
