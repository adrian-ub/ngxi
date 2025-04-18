import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSmartWatch01Icon],svg[hugeicons-smart-watch-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="6"></svg:circle><svg:path d="M8 7.5s.897-1.572 1.062-3.48c.077-.888.115-1.332.364-1.588c.25-.256.551-.29 1.153-.357C10.977 2.031 11.451 2 12 2s1.023.03 1.42.075c.603.068.904.101 1.154.357s.287.7.364 1.588C15.103 5.928 16 7.5 16 7.5m0 9s-.897 1.572-1.062 3.48c-.077.888-.115 1.332-.364 1.588c-.25.256-.551.29-1.153.357c-.398.044-.872.075-1.421.075s-1.023-.03-1.42-.075c-.603-.068-.904-.101-1.154-.357s-.287-.7-.364-1.588C8.897 18.072 8 16.5 8 16.5"></svg:path></svg:g>`,
})
export class HugeiconsSmartWatch01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
