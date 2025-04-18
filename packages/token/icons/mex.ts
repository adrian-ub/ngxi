import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenMexIcon],svg[token-mex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.718 8.31l.901-.584l.847.583l-.847.515zm-1.53.847l-.9.584l.9.514l.847-.514zM3 9.974v4.218l3.6 2.082V12.11zm3.62-.817l-.902.584l.901.514l.847-.514zm-.902 2.016l.901-.584l.847.584l-.847.514zM5.39 9.878l-.901.584l.901.514l.847-.514zm1.531.584l.901-.584l.847.584l-.846.514zm2.13-1.305l-.902.584l.901.514l.847-.514zm1.149 5.317v-4.5h.9l1.35 2.986l1.35-2.986h3.15v.9h-2.26v.9h2.26v.9h-2.26v.9h2.26v.618l1.402-2.058l-1.4-2.16h1.096l.862 1.344l.822-1.344h1.177l-1.42 2.16L21 14.474h-1.136l-.954-1.514l-.943 1.514H13.8v-2.34l-.9 2.34H12l-.9-2.34v2.34z"></svg:path>`,
})
export class TokenMexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
