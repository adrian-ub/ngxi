import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFlowIcon],svg[hugeicons-flow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 6.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-18 0c0-1.65 0-2.475.513-2.987C4.025 3 4.85 3 6.5 3s2.475 0 2.987.513C10 4.025 10 4.85 10 6.5s0 2.475-.513 2.987C8.975 10 8.15 10 6.5 10s-2.475 0-2.987-.513C3 8.975 3 8.15 3 6.5m0 11c0-1.65 0-2.475.513-2.987C4.025 14 4.85 14 6.5 14s2.475 0 2.987.513C10 15.025 10 15.85 10 17.5s0 2.475-.513 2.987C8.975 21 8.15 21 6.5 21s-2.475 0-2.987-.513C3 19.975 3 19.15 3 17.5m11 0c0-1.65 0-2.475.513-2.987C15.025 14 15.85 14 17.5 14s2.475 0 2.987.513C21 15.025 21 15.85 21 17.5s0 2.475-.513 2.987C19.975 21 19.15 21 17.5 21s-2.475 0-2.987-.513C14 19.975 14 19.15 14 17.5m3.5-7.5v4M14 17.5h-4m0-11h4" color="currentColor"></svg:path>`,
})
export class HugeiconsFlowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
