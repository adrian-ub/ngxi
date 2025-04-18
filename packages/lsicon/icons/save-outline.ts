import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSaveOutlineIcon],svg[lsicon-save-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5.5 13.5v-5h5v5m-5-11v3h5v-3m-8 11h11v-9l-2-2h-9z"></svg:path>`,
})
export class LsiconSaveOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
