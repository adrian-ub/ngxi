import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopMicrophoneHandheldCircleIcon],svg[pepicons-pop-microphone-handheld-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g stroke="currentColor" transform="translate(3 3)"><svg:circle cx="11.663" cy="5.118" r="3" stroke-width="2" transform="rotate(38.27 11.663 5.118)"></svg:circle><svg:path stroke-linecap="round" stroke-width="2" d="m8.544 5.842l-4.562 6.59m7.703-4.112l-5.348 5.97m-2.355-1.858l2.355 1.858"></svg:path><svg:path stroke-width="1.5" d="m9.617 2.867l.821 1.25a5 5 0 0 0 2.483 1.959l1.407.507"></svg:path><svg:path stroke-linecap="round" stroke-width="2" d="M4.7 14s-1.034 1.328-1.158 2c-.144.774.135 1.287.514 1.586s1.211.388 1.993.299c2.134-.245 3.423-3.438 5.35-4.385c1.488-.73 1.385-.632 3-1c1.374-.313 2.699-.547 2.699-.547"></svg:path></svg:g><svg:path fill="currentColor" fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopMicrophoneHandheldCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
