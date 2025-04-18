import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFaceWithRollingEyesIcon],svg[twemoji-face-with-rolling-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="18" r="18" fill="#FFCC4D"></svg:circle><svg:circle cx="24.5" cy="13.5" r="5.5" fill="#F4F7F9"></svg:circle><svg:circle cx="11.5" cy="13.5" r="5.5" fill="#F4F7F9"></svg:circle><svg:path fill="#65471B" d="M23.109 23.424c-2.763-.667-8.873-.06-11.162 4.405a.373.373 0 0 0 .334.546a.38.38 0 0 0 .241-.087c3.084-2.58 7.436-2.58 10.036-2.58c1.635 0 2.536 0 2.536-.708s-.705-1.268-1.985-1.576M10.5 13a2.5 2.5 0 0 0 2.5-2.5c0-1.252-.923-2.28-2.124-2.462a5.4 5.4 0 0 0-2.178.736A2.5 2.5 0 0 0 8 10.5a2.5 2.5 0 0 0 2.5 2.5m13 0a2.5 2.5 0 0 0 2.5-2.5c0-1.252-.923-2.28-2.124-2.462a5.4 5.4 0 0 0-2.177.736A2.48 2.48 0 0 0 21 10.5a2.5 2.5 0 0 0 2.5 2.5"></svg:path>`,
})
export class TwemojiFaceWithRollingEyesIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
