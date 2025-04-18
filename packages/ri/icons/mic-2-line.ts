import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMic2LineIcon],svg[ri-mic-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a3 3 0 0 0-3 3v6a3 3 0 1 0 6 0V6a3 3 0 0 0-3-3m0-2a5 5 0 0 1 5 5v6a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5M2.192 13.962l1.962-.393a8.003 8.003 0 0 0 15.692 0l1.962.392C20.896 18.545 16.852 22 12 22s-8.896-3.455-9.808-8.039"></svg:path>`,
})
export class RiMic2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
