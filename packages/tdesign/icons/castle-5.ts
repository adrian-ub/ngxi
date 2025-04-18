import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCastle5Icon],svg[tdesign-castle-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2v1h-4V2h-2v7.131l-2-1.333l-2 1.333V2H8v1H4V2H2v20h20V2zM4 5h4v5H6v10H4zm4 15v-8h1.303L12 10.202L14.697 12H16v8h-3v-5h-2v5zm10 0V10h-2V5h4v15z"></svg:path>`,
})
export class TdesignCastle5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
