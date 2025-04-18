import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBrainIcon],svg[hugeicons-brain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.998 7.127Q17.48 7 18 7a4 4 0 1 1-1.027 7.867m.025-7.74L17 7a4 4 0 0 0-7.91-.85m7.908.977A4 4 0 0 1 16.465 9m.508 5.867q.027-.18.027-.367a2.5 2.5 0 0 0-2-2.45m1.973 2.817A2.5 2.5 0 0 1 14.5 17H14a4 4 0 0 0-4 4M9.09 6.15a4 4 0 0 0-4.932 4.97M9.09 6.15A4 4 0 0 1 11.465 8m-7.306 3.12A3.001 3.001 0 0 0 5 17a3 3 0 0 0 2.83-2m-3.671-3.88q.136.467.376.88m7.301-.256c-.51.491-1.383.576-2.129.157c-.746-.42-1.127-1.21-.972-1.901" color="currentColor"></svg:path>`,
})
export class HugeiconsBrainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
