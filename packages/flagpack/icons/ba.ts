import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackBaIcon],svg[flagpack-ba-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#2E42A5" d="M0 0h32v24H0z"></svg:path><svg:path fill="#FECA00" d="M9 0h20v24z"></svg:path><svg:path fill="#F7FCFF" d="m6.108 2.794l-1.176.618l.225-1.31l-.951-.926L5.52.985l.588-1.191l.588 1.19l1.314.192l-.95.927l.224 1.309zm3.487 4.28l-1.176.618l.225-1.31l-.951-.926l1.314-.191l.588-1.191l.587 1.19l1.315.192l-.951.927l.224 1.309zm3.268 4.164l-1.175.618l.224-1.309l-.95-.927l1.314-.19l.587-1.192l.588 1.191l1.314.191l-.95.927l.224 1.31zm3.202 3.992l-1.175.617l.224-1.309l-.95-.927l1.313-.19l.588-1.192l.588 1.191l1.314.191l-.95.927l.224 1.31zm3.449 4.107l-1.175.618l.224-1.31l-.95-.926l1.314-.191l.587-1.191l.588 1.19l1.314.192l-.95.927l.224 1.309zm3.813 3.974l-1.176.618l.225-1.309l-.951-.927l1.314-.191l.588-1.191l.588 1.191l1.314.191l-.951.927l.225 1.31z"></svg:path></svg:g>`,
})
export class FlagpackBaIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
