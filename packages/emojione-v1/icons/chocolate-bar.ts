import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1ChocolateBarIcon],svg[emojione-v1-chocolate-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#67308f" d="M57.962 15.5c.658-1.539-.072-3.375-1.611-4.04Q43.311 5.85 30.261.24c-1.539-.659-3.379.072-4.04 1.611c-6.664 15.486-13.323 30.977-19.983 46.46c-.663 1.539.068 3.375 1.606 4.03l26.09 11.225c.829.356 1.594.327 2.24.063l.108-.038q.056-.02.108-.047c.646-.255 1.224-.757 1.579-1.585c6.663-15.49 13.324-30.977 19.986-46.47"></svg:path><svg:path fill="#8a5f3d" d="m49.489 35.2l8.473-19.697c.658-1.539-.072-3.375-1.611-4.04L30.261.243c-1.539-.659-3.379.072-4.04 1.611q-3.529 8.205-7.06 16.409c9.868 6.01 20 11.627 30.32 16.935"></svg:path><svg:g fill="#764d2a"><svg:path d="M25.06 30.32L36.546 2.912l-1.511-.629l-10.998 26.26c.376.57.72 1.161 1.023 1.777m5.809 11.218L45.427 6.8l-1.509-.629l-13.855 33.07q.392 1.154.806 2.295"></svg:path><svg:path d="m54.728 23.667l-32.18-13.485c-.17.523-.359 1.033-.595 1.521l32.02 13.417c.201-.5.464-.985.754-1.453"></svg:path><svg:path d="m53.442 10.173l1.507.629l-15.82 37.9l-1.507-.63z"></svg:path></svg:g><svg:path fill="#e7e6e6" d="M49.489 35.2c4.214 3.735-11.914 14.811-14.341 17.552c-2.427 2.737-3.302-5.665-6.528-13.692c-2.509-6.243-13.1-20.544-9.452-20.795c4.557-.31 26.12 13.2 30.32 16.935"></svg:path>`,
})
export class EmojioneV1ChocolateBarIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
