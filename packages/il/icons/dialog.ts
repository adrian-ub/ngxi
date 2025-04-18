import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilDialogIcon],svg[il-dialog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M695 5q20 0 33 13t13 33v394q0 19-13 32t-33 14H463v162L278 491H46q-19 0-32-14T0 445V51q0-20 14-33T46 5z"></svg:path>`,
})
export class IlDialogIcon {
  readonly viewBox = input("0 0 750 800")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
