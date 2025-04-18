import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatWoodIcon],svg[fluent-emoji-flat-wood-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#6D4534" d="M24 6.5H8v19c0 1.933 3.582 3.5 8 3.5s8-1.567 8-3.5z"></svg:path><svg:path fill="#A56953" d="M16 10c4.418 0 8-1.567 8-3.5S20.418 3 16 3S8 4.567 8 6.5c0 .637.32 1.181 1 1.696c.022.017-.023-.018 0 0V14.5a.5.5 0 0 0 1 0V8.815c.027.014-.028-.014 0 0c1.467.75 3.566 1.185 6 1.185m11.354.768L24 14.12V25.5c0 .888-.755 1.698-2 2.315V23.5a.5.5 0 0 0-1-.008v-9.578a2.5 2.5 0 0 1 .732-1.768l3.5-3.5a1 1 0 0 1 1.414 0l.708.708a1 1 0 0 1 0 1.414m-23.208 8.5L8 23.12v2.38c0 1.105 1.171 2.09 3 2.732v-5.318a2.5 2.5 0 0 0-.732-1.768l-4-4a1 1 0 0 0-1.414 0l-.708.707a1 1 0 0 0 0 1.415M12 15.5a.5.5 0 0 1 1 0v4a.5.5 0 1 1-1 0z"></svg:path><svg:path fill="#F3AD61" d="M23 6.25C23 7.769 19.866 9 16 9S9 7.769 9 6.25s3.134-2.75 7-2.75s7 1.231 7 2.75"></svg:path><svg:path fill="#6D4534" d="M16 8c2.761 0 5-.84 5-1.875S18.761 4.25 16 4.25s-5 .84-5 1.875S13.239 8 16 8m0-1c-1.657 0-3-.448-3-1s1.343-1 3-1s3 .448 3 1s-1.343 1-3 1"></svg:path></svg:g>`,
})
export class FluentEmojiFlatWoodIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
