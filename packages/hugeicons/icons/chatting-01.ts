import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChatting01Icon],svg[hugeicons-chatting-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 9c-.795-3.985-4.487-7-8.92-7C6.064 2 2 5.855 2 10.61c0 2.285.938 4.36 2.469 5.9c.336.34.561.803.47 1.28a4.75 4.75 0 0 1-.986 2.114a5.95 5.95 0 0 0 3.835-.591c.412-.218.619-.326.764-.348c.102-.016.235-.001.448.035"></svg:path><svg:path d="M11 16.262c0 2.905 2.463 5.261 5.5 5.261q.537 0 1.064-.098c.253-.047.379-.071.467-.058c.088.014.213.08.463.213c.706.376 1.53.509 2.323.361a2.9 2.9 0 0 1-.598-1.291c-.055-.292.081-.575.286-.782A5.12 5.12 0 0 0 22 16.262C22 13.356 19.537 11 16.5 11S11 13.356 11 16.262"></svg:path></svg:g>`,
})
export class HugeiconsChatting01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
