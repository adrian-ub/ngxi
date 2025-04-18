import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFlowConnectionIcon],svg[hugeicons-flow-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 5.5c0-1.65 0-2.475.513-2.987C3.525 2 4.35 2 6 2s2.475 0 2.987.513C9.5 3.025 9.5 3.85 9.5 5.5s0 2.475-.513 2.987C8.475 9 7.65 9 6 9s-2.475 0-2.987-.513C2.5 7.975 2.5 7.15 2.5 5.5m1.157 10.157C4.76 14.552 5.314 14 6 14s1.239.552 2.343 1.657C9.448 16.76 10 17.314 10 18s-.552 1.239-1.657 2.343C7.24 21.448 6.686 22 6 22s-1.239-.552-2.343-1.657C2.552 19.24 2 18.686 2 18s.552-1.239 1.657-2.343M6 9v5m4 4h5m0 0c0-1.65 0-2.475.513-2.987c.512-.513 1.337-.513 2.987-.513s2.475 0 2.987.513C22 15.525 22 16.35 22 18s0 2.475-.513 2.987c-.512.513-1.337.513-2.987.513s-2.475 0-2.987-.513C15 20.475 15 19.65 15 18" color="currentColor"></svg:path>`,
})
export class HugeiconsFlowConnectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
