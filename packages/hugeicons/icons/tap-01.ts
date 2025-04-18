import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTap01Icon],svg[hugeicons-tap-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.988 6.027c-.066-.92.501-2.742 2.057-3.503c.642-.39 2.403-.994 4.087.082c1.66 1.06 1.772 2.622 1.876 3.41"></svg:path><svg:path d="M17.166 22.001c-.046-1.636.057-1.798.177-2.162s.956-1.676 1.252-2.614c.958-3.034.065-3.68-1.125-4.54c-1.32-.954-3.694-1.428-4.929-1.323V6.523c0-.823-.789-1.497-1.632-1.497S9.292 5.7 9.292 6.523v8.312l-1.72-1.49c-.559-.594-1.458-.654-2.072-.115a1.45 1.45 0 0 0-.196 1.983l1.131 1.464m2.81 5.324v-.853c.037-1.053-.747-1.74-1.769-3.114l-.215-.287m0 0c-.31-.41-.582-.76-.826-1.07m.826 1.07l1.023 1.326m-1.023-1.326l-.826-1.07m0 0c-.5-.634-.877-1.095-1.202-1.553"></svg:path></svg:g>`,
})
export class HugeiconsTap01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
