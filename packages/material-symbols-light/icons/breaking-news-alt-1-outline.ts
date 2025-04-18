import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBreakingNewsAlt1OutlineIcon],svg[material-symbols-light-breaking-news-alt-1-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.77 16.5h4.46v-1H6.77zm9.46 0h1v-1h-1zm-9.46-4h4.46v-1H6.77zm9.46 0h1v-5h-1zm-9.46-4h4.46v-1H6.77zM4.615 20q-.691 0-1.154-.462T3 18.384V5.616q0-.691.463-1.153T4.615 4h14.77q.69 0 1.152.463T21 5.616v12.769q0 .69-.463 1.153T19.385 20zm0-1h14.769q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T19.385 5H4.615q-.23 0-.423.192T4 5.616v12.769q0 .23.192.423t.423.192M4 19V5z"></svg:path>`,
})
export class MaterialSymbolsLightBreakingNewsAlt1OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
