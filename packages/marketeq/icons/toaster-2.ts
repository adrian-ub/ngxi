import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqToaster2Icon],svg[marketeq-toaster-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 35.417h4.167m6.25-25a4.167 4.167 0 0 1-4.167 4.166v8.334H16.667v-8.334a4.167 4.167 0 1 1 0-8.333H37.5a4.167 4.167 0 0 1 4.167 4.167"></svg:path><svg:path stroke="#306CFE" d="M10.417 29.167H6.25M12.5 43.75h29.167a2.083 2.083 0 0 0 2.083-2.083V25a2.083 2.083 0 0 0-2.083-2.083H12.5A2.083 2.083 0 0 0 10.417 25v16.667A2.083 2.083 0 0 0 12.5 43.75"></svg:path></svg:g>`,
})
export class MarketeqToaster2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
