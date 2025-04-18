import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalAftereffectsIcon],svg[devicon-original-aftereffects-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1F0740" d="M6.5 6.5h115v115H6.5z"></svg:path><svg:path fill="#D490C5" d="M0 0v128h128V0H0zm121.5 121.5H6.5V6.5h115v115z"></svg:path><svg:path fill="#D490C5" d="M103.5 59.2s-.6-14.6-16.5-14.6c-16 0-17.3 22-17.3 22v4.7S72.5 89.6 86 89.6s14.8-2.6 14.8-2.6v-8.1s-19.3 9.2-21.2-10h24v-9.7zm-9 2.4h-15s0-8.3 7.5-9.2c8.2 0 7.5 9.2 7.5 9.2zm-44-31.7H38.4v3.8l-16 54.9h9.4l4.4-16.1H53l4.5 16.1h10.3L50.5 29.9zM38.2 63.1l6.4-24.5L51 63.1H38.2z"></svg:path>`,
})
export class DeviconOriginalAftereffectsIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
