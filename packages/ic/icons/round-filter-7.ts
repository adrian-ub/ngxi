import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundFilter7Icon],svg[ic-round-filter-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5c-.55 0-1 .45-1 1v15c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55-.45-1-1-1m19-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m-1 16H8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1m-6.75-2.49l3.58-7.17c.11-.22.17-.47.17-.72c0-.9-.72-1.62-1.62-1.62H12c-.55 0-1 .45-1 1s.45 1 1 1h3l-3.36 6.71a.89.89 0 0 0 .8 1.29h.01c.34 0 .65-.19.8-.49"></svg:path>`,
})
export class IcRoundFilter7Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
