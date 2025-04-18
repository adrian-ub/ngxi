import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenHashkeyIcon],svg[token-hashkey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.65 4.023l-4.5-1.02a.122.122 0 0 0-.15.118v17.758c0 .076.07.135.145.118l4.502-.927a.12.12 0 0 0 .097-.118V4.138a.115.115 0 0 0-.093-.115m7.699 0l4.501-1.02a.122.122 0 0 1 .149.118v17.758a.12.12 0 0 1-.145.118l-4.502-.927a.12.12 0 0 1-.097-.118V4.138c0-.056.038-.104.093-.115m-6.221 5.549h4.744l-4.744 4.742zm4.744 4.742h-4.744l4.744-4.742z"></svg:path>`,
})
export class TokenHashkeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
