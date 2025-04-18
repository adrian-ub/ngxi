import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashPeaceSymbolSolidIcon],svg[stash-peace-symbol-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M10.75 3.086A9.002 9.002 0 0 0 4.274 16.62q.043-.054.092-.103l6.384-6.384zM5.8 18.523a8.97 8.97 0 0 0 4.95 2.39v-7.245l-4.616 4.616q-.152.15-.335.24m7.451 2.39a8.97 8.97 0 0 0 4.95-2.39a1.3 1.3 0 0 1-.334-.24l-4.616-4.616zm6.476-4.295A9.002 9.002 0 0 0 13.25 3.086v7.046l6.384 6.384q.05.05.092.103"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.75 3.086A9.002 9.002 0 0 0 4.274 16.62q.043-.054.092-.103l6.384-6.384zM5.8 18.523a8.97 8.97 0 0 0 4.95 2.39v-7.245l-4.616 4.616q-.152.15-.335.24m7.451 2.39a8.97 8.97 0 0 0 4.95-2.39a1.3 1.3 0 0 1-.334-.24l-4.616-4.616zm6.476-4.295A9.002 9.002 0 0 0 13.25 3.086v7.046l6.384 6.384q.05.05.092.103"></svg:path></svg:g>`,
})
export class StashPeaceSymbolSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
