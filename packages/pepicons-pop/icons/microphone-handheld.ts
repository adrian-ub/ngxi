import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopMicrophoneHandheldIcon],svg[pepicons-pop-microphone-handheld-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="11.663" cy="5.118" r="3" stroke-width="2" transform="rotate(38.27 11.663 5.118)"></svg:circle><svg:path stroke-linecap="round" stroke-width="2" d="m8.544 5.842l-4.562 6.59m7.703-4.112l-5.348 5.97m-2.355-1.858l2.355 1.858"></svg:path><svg:path stroke-width="1.5" d="m9.617 2.867l.821 1.25a5 5 0 0 0 2.483 1.959l1.407.507"></svg:path><svg:path stroke-linecap="round" stroke-width="2" d="M4.7 14s-1.034 1.328-1.158 2c-.144.774.135 1.287.514 1.586s1.211.388 1.993.299c2.134-.245 3.423-3.438 5.35-4.385c1.488-.73 1.385-.632 3-1c1.374-.313 2.699-.547 2.699-.547"></svg:path></svg:g>`,
})
export class PepiconsPopMicrophoneHandheldIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
