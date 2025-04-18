import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCallEnd24FilledIcon],svg[fluent-call-end-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.949 12.992l-.198 1.037c-.185.971-1.092 1.623-2.12 1.524l-2.047-.198c-.892-.086-1.652-.72-1.878-1.566l-.632-2.355q-1.401-.575-3.09-.525a8.1 8.1 0 0 0-3.14.707l-.391 2.205c-.148.836-.838 1.459-1.711 1.547l-2.035.204c-1.015.102-1.988-.544-2.277-1.51l-.309-1.037c-.308-1.032-.033-2.118.721-2.851Q5.513 7.579 11.75 7.57q6.245-.007 9.185 2.588c.824.728 1.21 1.806 1.015 2.834"></svg:path>`,
})
export class FluentCallEnd24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
