import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSafebox2Icon],svg[marketeq-safebox-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M22.917 22.917h4.166m-4.166 0a4.167 4.167 0 1 0-8.334 0a4.167 4.167 0 0 0 8.334 0"></svg:path><svg:path stroke="#306CFE" d="M41.667 39.583H8.333A2.083 2.083 0 0 1 6.25 37.5V8.333A2.083 2.083 0 0 1 8.333 6.25h33.334a2.083 2.083 0 0 1 2.083 2.083V37.5a2.083 2.083 0 0 1-2.083 2.083m-25 0H12.5v4.167h4.167zm16.666 4.167H37.5v-4.167h-4.167z"></svg:path></svg:g>`,
})
export class MarketeqSafebox2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
