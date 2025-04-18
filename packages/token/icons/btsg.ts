import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBtsgIcon],svg[token-btsg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.522 18.478V2H6.348v16.478c0 .265.222.478.496.478h1.182a.486.486 0 0 0 .496-.478m4.409-7.782c-.274 0-.496.243-.496.543v10.217c0 .3.222.544.495.544h1.183c.274 0 .496-.244.496-.544V11.24c0-.3-.222-.543-.496-.543zM9.887 12c-.274 0-.496.24-.496.54v8.486c0 .3.222.54.496.54h1.183c.274 0 .495-.24.495-.54V12.54c0-.3-.221-.539-.495-.539zm5.591.983c0-.305.222-.548.496-.548h1.183c.273 0 .495.243.495.548v7.165c0 .304-.222.548-.495.548h-1.183c-.274 0-.496-.244-.496-.548z"></svg:path>`,
})
export class TokenBtsgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
