import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCallHangUpSolidIcon],svg[streamline-call-hang-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.22 1.28A.75.75 0 0 1 1.28.22l6.123 6.122l.953-.954l.003-.002a.54.54 0 0 0 0-.772l-.006-.006a1.55 1.55 0 0 1 0-2.175l1.87-1.87l.004-.004a1.56 1.56 0 0 1 2.184 0l.437.447a3.635 3.635 0 0 1 .498 4.555l-.006.01a29 29 0 0 1-2.995 3.713l3.435 3.436a.75.75 0 1 1-1.06 1.06zm5.242 7.002l2.895 2.895l-.071.066a29 29 0 0 1-2.707 2.069l-.009.005a3.635 3.635 0 0 1-4.555-.498l-.44-.43l-.007-.007a1.56 1.56 0 0 1 0-2.184L2.45 8.335l.001-.001a1.55 1.55 0 0 1 2.175 0v-.001l-.35.357l.35-.356a.56.56 0 0 0 .783 0l.052-.052Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCallHangUpSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
