import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqUnlockIcon],svg[marketeq-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M16.667 18.75v-4.167A8.333 8.333 0 0 1 25 6.25v0a8.33 8.33 0 0 1 7.208 4.167"></svg:path><svg:path stroke="#306CFE" d="M37.5 18.75h-25c-1.15 0-2.083.933-2.083 2.083v20.834c0 1.15.932 2.083 2.083 2.083h25c1.15 0 2.083-.933 2.083-2.083V20.833c0-1.15-.932-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqUnlockIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
