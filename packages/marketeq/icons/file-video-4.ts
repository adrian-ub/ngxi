import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqFileVideo4Icon],svg[marketeq-file-video-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m27.083 25l-4.166-3.125v6.25z"></svg:path><svg:path stroke="#306CFE" d="M12.5 43.75a2.083 2.083 0 0 1-2.083-2.083V14.583L18.75 6.25H37.5a2.083 2.083 0 0 1 2.083 2.083v33.334A2.083 2.083 0 0 1 37.5 43.75z"></svg:path></svg:g>`,
})
export class MarketeqFileVideo4Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
