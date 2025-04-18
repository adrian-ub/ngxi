import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedKogeIcon],svg[token-branded-koge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFC800" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m0-1.059a7.942 7.942 0 1 0 0-15.883a7.942 7.942 0 0 0 0 15.883" clip-rule="evenodd"></svg:path><svg:path fill="#2C2E35" d="M8.824 8.184v8.56l1.588-.846v-6.83zm2.647 5.284l1.197.91l-1.197.794z"></svg:path><svg:path fill="#FFC700" d="m12.673 10.95l1.313.953l-1.07.689l1.345 1.064l2.504-1.467l-6.57-4.844l-1.37.81l2.646 1.922v1.615z"></svg:path></svg:g>`,
})
export class TokenBrandedKogeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
