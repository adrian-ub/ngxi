import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqRejectedFile2Icon],svg[marketeq-rejected-file-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m21.875 21.875l6.25 6.25m0-6.25l-6.25 6.25"></svg:path><svg:path stroke="#306CFE" d="M14.583 6.25H37.5a2.083 2.083 0 0 1 2.083 2.083v33.334A2.083 2.083 0 0 1 37.5 43.75h-25a2.083 2.083 0 0 1-2.083-2.083v-31.25zm-4.166 4.167h4.166V6.25z"></svg:path></svg:g>`,
})
export class MarketeqRejectedFile2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
