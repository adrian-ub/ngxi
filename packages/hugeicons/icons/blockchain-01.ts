import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBlockchain01Icon],svg[hugeicons-blockchain-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 21c.28 0 .539-.127 1.058-.382l4.172-2.044C19.077 17.669 20 17.216 20 16.5v-9M12 21c-.28 0-.539-.127-1.058-.382L6.77 18.574C4.923 17.669 4 17.216 4 16.5v-9M12 21v-9"></svg:path><svg:path d="M10.942 3.382C11.462 3.127 11.721 3 12 3c.28 0 .539.127 1.058.382l4.172 2.044C19.077 6.331 20 6.784 20 7.5s-.923 1.169-2.77 2.074l-4.172 2.044c-.52.255-.779.382-1.058.382c-.28 0-.539-.127-1.058-.382L6.77 9.574C4.923 8.669 4 8.216 4 7.5s.923-1.169 2.77-2.074z"></svg:path></svg:g>`,
})
export class HugeiconsBlockchain01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
