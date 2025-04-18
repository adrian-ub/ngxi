import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesTwitchSolidIcon],svg[bubbles-twitch-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 4.15v11.975h3.75V18h2.57l1.874-1.875h4.719L18 13.038V2H4.15zm2.813-.275h11.312v7.288l-2.15 2.15h-3.78l-2.54 2.537v-2.537H4.813z"></svg:path><svg:path d="m8.594 13.587l1.212-1.212h3.781l1.6-1.6V4.813H5.75v7.562h2.844zm3.781-6.43h.938v2.874h-.938zm-2.844 0h.938v2.874H9.53z"></svg:path></svg:g>`,
})
export class BubblesTwitchSolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
