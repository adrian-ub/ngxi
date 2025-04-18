import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayEqualizer1Icon],svg[subway-equalizer-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85.3 21.3H42.7V64h42.7V21.3zM42.7 490.7h42.7v-256H42.7zm384 0h42.7V448h-42.7zm42.6-469.4h-42.7v256h42.7zm-192 0h-42.7v149.3h42.7zm-42.6 469.4h42.7V341.3h-42.7zM0 192h128v-85.3H0zm192 106.7h128v-85.3H192zM384 320v85.3h128V320z"></svg:path>`,
})
export class SubwayEqualizer1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
