import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSecuredFileFolder2Icon],svg[marketeq-secured-file-folder-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m37.5 29.167l6.25 2.083c0 8.333-1.292 10.625-6.25 12.5c-4.958-1.875-6.25-4.167-6.25-12.5z"></svg:path><svg:path stroke="#306CFE" d="M37.5 20.833V18.75a2.083 2.083 0 0 0-2.083-2.083h-6.25L25 20.833H8.333a2.083 2.083 0 0 0-2.083 2.084V37.5a2.083 2.083 0 0 0 2.083 2.083h14.584"></svg:path><svg:path stroke="#306CFE" d="M29.167 16.667L25 20.833H10.417v-12.5A2.083 2.083 0 0 1 12.5 6.25h18.75a2.083 2.083 0 0 1 2.083 2.083v8.334z"></svg:path></svg:g>`,
})
export class MarketeqSecuredFileFolder2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
