import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorPinkIcon],svg[cryptocurrency-color-pink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#ed79aa"></svg:circle><svg:g fill="#fff"><svg:path d="m23.452 8.929l-1.87 1.883a7.24 7.24 0 0 0-5.152-2.149c-3.915 0-7.11 3.11-7.278 7.01h-.008v7.122A10 10 0 0 1 6.5 16c0-5.523 4.446-10 9.93-10a9.87 9.87 0 0 1 7.022 2.929m0 14.142A9.87 9.87 0 0 1 16.592 26v-2.664a7.24 7.24 0 0 0 4.99-2.147z" opacity=".5"></svg:path><svg:path d="M11.681 24.784v-9.11h.007C11.828 13.069 13.97 11 16.592 11c2.712 0 4.911 2.214 4.911 4.946s-2.199 4.945-4.91 4.945a4.86 4.86 0 0 1-2.483-.677v5.511a9.8 9.8 0 0 1-2.429-.94zm4.911-6.338a2.49 2.49 0 0 0 2.483-2.5c0-1.381-1.112-2.5-2.483-2.5a2.49 2.49 0 0 0-2.482 2.5c0 1.38 1.111 2.5 2.482 2.5"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorPinkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
