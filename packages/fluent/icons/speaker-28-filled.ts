import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSpeaker28FilledIcon],svg[fluent-speaker-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M14.395 3.902c.798-.748 2.105-.182 2.105.912v18.37c0 1.095-1.306 1.66-2.105.912L9.458 19.47a1.75 1.75 0 0 0-1.196-.473H5.25A3.25 3.25 0 0 1 2 15.747v-3.492a3.25 3.25 0 0 1 3.25-3.25h3.011c.445 0 .873-.169 1.197-.473l4.937-4.63z" fill="currentColor"></svg:path><svg:path d="M21.644 5.184a.75.75 0 0 1 1.058.068A13.202 13.202 0 0 1 26 14c0 3.352-1.246 6.415-3.298 8.748a.75.75 0 1 1-1.126-.991A11.703 11.703 0 0 0 24.5 14c0-2.973-1.103-5.687-2.924-7.757a.75.75 0 0 1 .068-1.059z" fill="currentColor"></svg:path><svg:path d="M20.353 8.303a.75.75 0 1 0-1.2.9A7.962 7.962 0 0 1 20.75 14c0 1.8-.594 3.46-1.597 4.797a.75.75 0 1 0 1.2.9A9.46 9.46 0 0 0 22.25 14a9.46 9.46 0 0 0-1.897-5.697z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentSpeaker28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
