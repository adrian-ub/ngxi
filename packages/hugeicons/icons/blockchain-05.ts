import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBlockchain05Icon],svg[hugeicons-blockchain-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 17c.227 0 .438-.106.86-.318l3.39-1.704c1.5-.754 2.25-1.131 2.25-1.728v-7.5M12 17c-.227 0-.438-.106-.86-.318l-3.39-1.704c-1.5-.754-2.25-1.131-2.25-1.728v-7.5M12 17V9.5m6.5-3.75c0-.597-.75-.974-2.25-1.728l-3.39-1.704C12.438 2.106 12.227 2 12 2s-.438.106-.86.318L7.75 4.022C6.25 4.776 5.5 5.153 5.5 5.75m13 0c0 .597-.75.974-2.25 1.728l-3.39 1.704c-.422.212-.633.318-.86.318M5.5 5.75c0 .597.75.974 2.25 1.728l3.39 1.704c.422.212.633.318.86.318m-2 11.25c0-.69.56-1.25 1.25-1.25h1.5c.69 0 1.25.56 1.25 1.25m-4 0c0 .69.56 1.25 1.25 1.25h1.5c.69 0 1.25-.56 1.25-1.25m-4 0H5m9 0h5" color="currentColor"></svg:path>`,
})
export class HugeiconsBlockchain05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
