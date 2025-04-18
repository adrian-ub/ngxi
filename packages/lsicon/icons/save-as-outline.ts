import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSaveAsOutlineIcon],svg[lsicon-save-as-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5 9.5h4.5m0 0l-2 2m2-2l-2-2m-2-5v3h5v-3m-8 11h11v-9l-2-2h-9z"></svg:path>`,
})
export class LsiconSaveAsOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
