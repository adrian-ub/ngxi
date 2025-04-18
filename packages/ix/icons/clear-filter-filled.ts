import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixClearFilterFilledIcon],svg[ix-clear-filter-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m384 85.333l-149.333 182v122H192v-122l-149.334-182zm64 288C448 414.571 414.57 448 373.333 448s-74.666-33.429-74.666-74.667s33.429-74.666 74.666-74.666S448 332.096 448 373.333m21.333 0c0 53.02-42.98 96-96 96c-53.019 0-96-42.98-96-96c0-53.019 42.981-96 96-96c53.02 0 96 42.981 96 96m-62.057-48.923l15.085 15.085l-33.944 33.944l33.953 33.954l-15.085 15.085l-33.953-33.954l-33.942 33.942l-15.085-15.085l33.942-33.942l-33.957-33.957l15.085-15.085l33.957 33.957z" clip-rule="evenodd"></svg:path>`,
})
export class IxClearFilterFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
