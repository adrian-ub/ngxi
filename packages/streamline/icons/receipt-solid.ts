import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineReceiptSolidIcon],svg[streamline-receipt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.732.732A2.5 2.5 0 0 1 2.5 0H12a2 2 0 0 1 2 2v3.5a.5.5 0 0 1-.5.5h-1.245V2.5a.625.625 0 1 0-1.25 0V6H11v7.5a.5.5 0 0 1-.757.429L8 12.583L5.757 13.93a.5.5 0 0 1-.514 0L3 12.583L.757 13.93A.5.5 0 0 1 0 13.5v-11A2.5 2.5 0 0 1 .732.732M5.5 2a.75.75 0 0 1 .75.75v.528a2 2 0 0 1 1.553 1.305a.75.75 0 0 1-1.415.5a.5.5 0 0 0-.471-.333h-.968a.366.366 0 0 0-.078.723l1.473.322a2 2 0 0 1-.094 3.927v.528a.75.75 0 0 1-1.5 0v-.528a2 2 0 0 1-1.553-1.305a.75.75 0 0 1 1.415-.5a.5.5 0 0 0 .471.333h.834a.5.5 0 0 0 .107-.99L4.55 6.939a1.866 1.866 0 0 1 .2-3.677V2.75A.75.75 0 0 1 5.5 2" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineReceiptSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
