import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMmIcon],svg[token-branded-mm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m0-.53A8.47 8.47 0 0 0 20.47 12A8.47 8.47 0 0 0 12 3.53A8.47 8.47 0 0 0 3.53 12A8.47 8.47 0 0 0 12 20.47"></svg:path><svg:path d="M17.294 7.766v8.47h-.53V9.354l-2.117 2.596v4.286h-4.27l3.74-4.577V9.435l-3.332 4.125l-3.55-4.125v6.801h-.53v-8.47l4.082 4.804l3.86-4.804v3.259zm-3.177 4.83l-2.551 3.11h2.551z"></svg:path></svg:g>`,
})
export class TokenBrandedMmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
