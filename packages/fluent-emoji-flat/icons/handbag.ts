import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatHandbagIcon],svg[fluent-emoji-flat-handbag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F3AD61" d="M25.656 10.36h-19.3c-1.49 0-2.74 1.13-2.9 2.61l-.921 8.766S3.758 22.8 5.926 22.8h20.17c2.157 0 3.393-1.047 3.393-1.047l-.923-8.783a2.94 2.94 0 0 0-2.91-2.61"></svg:path><svg:path fill="#6D4534" d="m2.526 21.75l-.51 4.83a2.917 2.917 0 0 0 2.9 3.22h22.17c1.73 0 3.08-1.5 2.9-3.22l-.51-4.83m-4.57-8.97h-.15v-1.99c0-4.84-3.94-8.79-8.79-8.79s-8.78 3.94-8.78 8.79v1.99h-.16c-.61 0-1.1.49-1.1 1.1v1.81c0 .61.49 1.1 1.1 1.1h1.81c.61 0 1.1-.49 1.1-1.1v-1.81c0-.61-.49-1.1-1.1-1.1h-.15v-1.99c0-4.02 3.27-7.29 7.29-7.29s7.29 3.27 7.29 7.29v1.99h-.16c-.61 0-1.1.49-1.1 1.1v1.81c0 .61.49 1.1 1.1 1.1h1.81c.61 0 1.1-.49 1.1-1.1v-1.81c-.01-.61-.5-1.1-1.11-1.1"></svg:path></svg:g>`,
})
export class FluentEmojiFlatHandbagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
