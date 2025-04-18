import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWhatsappIcon],svg[streamline-whatsapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 .88C3.665.88.88 3.67.88 7.002a6.14 6.14 0 0 0 1.025 3.39L.877 13.127l3.439-.622A6.1 6.1 0 0 0 7 13.121c3.338.002 6.127-2.784 6.127-6.118c0-3.33-2.79-6.126-6.127-6.124Z"></svg:path><svg:path d="M7.337 9.7c.829.531 1.692.144 2.294-.305c.415-.31.402-.907.047-1.285l-.7-.745c-.265.265-.783.397-1.142.287c-.773-.235-1.097-.637-1.36-1.047c-.301-.47.04-1.172.305-1.437l-.78-.712c-.329-.3-.828-.35-1.115-.01c-.568.673-.92 1.696-.503 2.347c.75 1.169 1.785 2.156 2.954 2.906Z"></svg:path></svg:g>`,
})
export class StreamlineWhatsappIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
