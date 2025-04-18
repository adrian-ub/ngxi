import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationShieldIcon],svg[foundation-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m50.027 10.459l-.018-.032l-33.606 19.404l.076.132v22.893h.014c.286 19.111 14.859 34.755 33.519 36.718c18.66-1.962 33.234-17.606 33.519-36.718V29.953l.066-.114zm-.015 69.097V51.677H26.435V35.651L50.012 22.04v29.637h23.563v1.179h.017c-.278 13.593-10.439 24.798-23.58 26.7"></svg:path>`,
})
export class FoundationShieldIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
