import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenKogeIcon],svg[token-koge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-17.999A9 9 0 0 0 12 21m0-1.059a7.942 7.942 0 1 0 0-15.883a7.942 7.942 0 0 0 0 15.883" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.822 8.184v8.56l1.589-.846v-6.83zm2.647 5.284l1.197.91l-1.197.794z"></svg:path><svg:path fill="currentColor" d="m12.671 10.95l1.313.953l-1.07.689l1.345 1.064l2.504-1.467l-6.57-4.844l-1.37.81l2.646 1.922v1.615z"></svg:path>`,
})
export class TokenKogeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
