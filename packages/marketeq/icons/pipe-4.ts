import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqPipe4Icon],svg[marketeq-pipe-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M8.333 33.333v-25h8.334v25H25V22.917a8.333 8.333 0 0 1 8.333-8.334H43.75v8.334H33.333v10.416A8.333 8.333 0 0 1 25 41.667h-8.333a8.333 8.333 0 0 1-8.334-8.334"></svg:path><svg:path stroke="#344054" d="M18.75 8.333H6.25M43.75 25V12.5z"></svg:path></svg:g>`,
})
export class MarketeqPipe4Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
