import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentArchiveLockerLockerContentArchiveFileCabinetIcon],svg[streamline-interface-content-archive-locker-locker-content-archive-file-cabinet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5.5h11a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-10a1 1 0 0 1 1-1ZM.5 7h13"></svg:path><svg:circle cx="7" cy="3.5" r=".5"></svg:circle><svg:circle cx="7" cy="10" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceContentArchiveLockerLockerContentArchiveFileCabinetIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
