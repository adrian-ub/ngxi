import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedOgnIcon],svg[token-branded-ogn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#007CFF" d="M5.066 7.465c-1.687 3.341-.731 7.47 0 9.034l2.784-2.813c-.275-1.074-.22-2.7.124-4.038c.405-1.604 1.8-3.212 3.949-3.24c1.512-.017 2.576.697 2.812 1.057l-9.421 9.562c.393.658 1.54 2.317 3.256 3.24c1.614.866 4.1.894 5.692.45a7.95 7.95 0 0 0 5.265-5.771c.833-3.437-.022-6.525-.596-7.48l-2.734 2.783c.186 1.069.158 3.476-.472 4.995c-.619 1.519-1.901 2.362-3.802 2.362a4.32 4.32 0 0 1-2.66-1.108l9.392-9.612c-2.25-3.814-6.215-4.073-7.65-3.814A7.95 7.95 0 0 0 5.067 7.46z"></svg:path>`,
})
export class TokenBrandedOgnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
