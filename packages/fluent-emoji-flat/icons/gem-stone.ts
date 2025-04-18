import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatGemStoneIcon],svg[fluent-emoji-flat-gem-stone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M24.21 7.9H7.79a.54.54 0 0 0-.42.21L2.15 15a.52.52 0 0 0 0 .67L15.59 29.9a.52.52 0 0 0 .76 0l13.44-14.23a.52.52 0 0 0 0-.67l-5.16-6.89a.54.54 0 0 0-.42-.21"></svg:path><svg:path fill="#1C5CD7" d="M15.594 29.902c.156.166.333.176.402.16l.017-.097V13.996H2.91c-.2.266-.632.837-.754.996c-.152.2-.254.418 0 .688z"></svg:path><svg:path fill="#0084CE" d="M15.996 7.9H7.79a.54.54 0 0 0-.42.21l-4.837 6.385c-.202.259-.406.712.501.712c3.37.002 6.156.009 8.106.009c1.046-1.566 2.724-4.077 4.856-7.316"></svg:path><svg:path fill="#AEDDFF" d="m16 30.059l-4.86-14.83h9.72z"></svg:path><svg:path fill="#26EAFC" d="M24.047 7.9h-8.031v7.298h13.883a.6.6 0 0 0-.1-.197c-.094-.134-4.983-6.642-5.1-6.806s-.328-.295-.652-.295"></svg:path><svg:path fill="#B4F6FC" d="m16 7.9l2.43 3.67l2.43 3.66h-9.72l2.43-3.66z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatGemStoneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
