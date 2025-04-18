import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsPodAutoscalerOutlinedIcon],svg[eos-icons-pod-autoscaler-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4a1.004 1.004 0 0 0-1-1h-4a1.004 1.004 0 0 0-1 1v1h6Zm-1.3 4l3.2 7H7.1l3.18-7ZM15 6H9L4 17h16Z"></svg:path><svg:circle cx="12" cy="11" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16 18v1H8v-1H6v1.003A2 2 0 0 0 8 21h8a2 2 0 0 0 2-1.997V18ZM5 11H3.5V8.5L0 12l3.5 3.5V13H5zm19 1l-3.5-3.5V11H19v2h1.5v2.5z"></svg:path>`,
})
export class EosIconsPodAutoscalerOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
