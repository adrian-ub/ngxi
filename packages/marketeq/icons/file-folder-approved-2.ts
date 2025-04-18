import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqFileFolderApproved2Icon],svg[marketeq-file-folder-approved-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m31.25 39.583l4.167 4.167l8.333-8.333M35.417 6.25H12.5a2.083 2.083 0 0 0-2.083 2.083V18.75h8.333l4.167 4.167h16.666v-12.5zm0 0v4.167h4.166z"></svg:path><svg:path stroke="#306CFE" d="M22.917 43.75H8.333a2.083 2.083 0 0 1-2.083-2.083V20.833a2.083 2.083 0 0 1 2.083-2.083H18.75l4.167 4.167h18.75A2.083 2.083 0 0 1 43.75 25v2.083"></svg:path></svg:g>`,
})
export class MarketeqFileFolderApproved2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
