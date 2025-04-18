import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiMinimizeOneSolidIcon],svg[mynaui-minimize-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.53 3.47a.75.75 0 0 0-1.06 0l-2.625 2.625L14 3.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75l-2.845-2.845L20.53 4.53a.75.75 0 0 0 0-1.06M4 13.25a.75.75 0 0 0-.75.75l2.845 2.845L3.47 19.47a.75.75 0 1 0 1.06 1.06l2.625-2.625L10 20.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class MynauiMinimizeOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
