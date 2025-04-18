import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatIdButtonIcon],svg[fluent-emoji-flat-id-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#8D65C5" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M14.381 7.788c-.76 0-1.375.615-1.375 1.375v13.589c0 .759.616 1.375 1.375 1.375h3.305c4.551 0 8.278-3.637 8.278-8.17s-3.727-8.17-8.278-8.17zm1.5 13.589a.125.125 0 0 1-.125-.125v-10.59c0-.068.056-.124.125-.124h1.805c3.074 0 5.528 2.447 5.528 5.42s-2.454 5.419-5.528 5.419zM10.762 9.263a1.375 1.375 0 1 0-2.75.003l.014 13.385a1.375 1.375 0 0 0 2.75-.003z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatIdButtonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
