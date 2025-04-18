import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqJobIcon],svg[marketeq-job-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 22.917v4.166m2.083-12.5H16.667v-6.25A2.083 2.083 0 0 1 18.75 6.25h12.5a2.083 2.083 0 0 1 2.083 2.083zm2.084 8.334H14.583z"></svg:path><svg:path stroke="#306CFE" d="M43.75 41.667v-25a2.084 2.084 0 0 0-2.083-2.084H8.333c-1.15 0-2.083.933-2.083 2.084v25c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqJobIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
