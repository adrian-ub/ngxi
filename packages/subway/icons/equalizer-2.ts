import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayEqualizer2Icon],svg[subway-equalizer-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42.7 486.7h42.7v-256H42.7zM469.3 17.3h-42.7v256h42.7zm-384 0H42.7V60h42.7V17.3zm192 0h-42.7v149.3h42.7zM0 188h128v-85.3H0zm21.3-64h85.3v42.7H21.3zm213.4 362.7h42.7V337.3h-42.7zm192 0h42.7V444h-42.7zM384 316v85.3h128V316zm106.7 64h-85.3v-42.7h85.3zM192 294.7h128v-85.3H192zm21.3-64h85.3v42.7h-85.3z"></svg:path>`,
})
export class SubwayEqualizer2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
