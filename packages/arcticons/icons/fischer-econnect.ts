import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFischerEconnectIcon],svg[arcticons-fischer-econnect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.176 41.953a21.498 21.498 0 1 1 24.112-.314"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.828 31.396a4.67 4.67 0 1 1-.858-6.927m16.222 6.927a4.671 4.671 0 1 1 .04-.046"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.577 29.35a1.5 1.5 0 1 1 .018-.008m8.551-11.33a1.5 1.5 0 1 1 .018-.007m-1.736 3.855l-2.747-4.15l-4.56 3.274s3.01 1.841 3.01 3.887s-.029 4.677-.029 4.677m-7.466-10.857v2.088s-.248 1.674-2.893 1.715m4.383-8.99l.02-1.82m-1.529 1.923h3.142l-.6 5.105h-2.562m-1.346-5.209l-.02-1.818m1.529 1.922h-3.141l.599 5.105h2.563"></svg:path>`,
})
export class ArcticonsFischerEconnectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
