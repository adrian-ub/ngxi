import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsZakatIcon],svg[hugeicons-zakat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.968 10.355c-.364-2.022-1.5-3.528-2.486-4.413c-.287-.257-.431-.386-.748-.505s-.59-.119-1.135-.119H13.4c-.545 0-.818 0-1.135.12c-.317.118-.46.247-.748.504c-.986.885-2.122 2.39-2.486 4.413C8.76 11.86 10.266 13 11.949 13h4.102c1.683 0 3.189-1.14 2.917-2.645M4 14h2.395c.294 0 .584.066.847.194l2.042.988c.263.127.553.193.848.193h1.042c1.008 0 1.826.791 1.826 1.767c0 .04-.027.074-.066.085l-2.541.703a1.95 1.95 0 0 1-1.368-.124L6.842 16.75M13 16.5l4.593-1.411a1.985 1.985 0 0 1 2.204.753c.369.51.219 1.242-.319 1.552l-7.515 4.337a2 2 0 0 1-1.568.187L4 20.02" color="currentColor"></svg:path>`,
})
export class HugeiconsZakatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
