import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatCupWithStrawIcon],svg[fluent-emoji-flat-cup-with-straw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#CA0B4A" d="M15.25 2.75A.75.75 0 0 1 16 2h4v1.5h-3.25V8a.75.75 0 0 1-1.5 0z"></svg:path><svg:path fill="#990838" d="M20.5 2.75c0 .414-.224.75-.5.75s-.5-.336-.5-.75s.224-.75.5-.75s.5.336.5.75"></svg:path><svg:path fill="#CDC4D6" d="m11 9l.5-1l.007-.013C11.75 7.507 12.009 7 13 7h6c1 0 1.263.509 1.5 1l.5 1v1H11zM9.5 29l-.916-11l.198-.141l7.2-3.466l7.202 3.466l.233.141l-.917 11c-.04.556-.5 1-1 1h-11c-.5 0-.935-.45-1-1"></svg:path><svg:path fill="#E5336D" d="M23.417 18H8.583L8 11l8-.5l8 .5z"></svg:path><svg:path fill="#F3EEF8" d="M7 10a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class FluentEmojiFlatCupWithStrawIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
