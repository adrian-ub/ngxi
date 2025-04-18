import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqLock1Icon],svg[marketeq-lock-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 18.75v-4.167a8.333 8.333 0 0 0-16.666 0v4.167"></svg:path><svg:path stroke="#306CFE" d="M37.5 18.75h-25c-1.15 0-2.083.933-2.083 2.083v20.834c0 1.15.932 2.083 2.083 2.083h25c1.15 0 2.083-.933 2.083-2.083V20.833c0-1.15-.932-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqLock1Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
