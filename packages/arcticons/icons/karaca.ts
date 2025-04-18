import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKaracaIcon],svg[arcticons-karaca-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M14.552 26.034H29.74m-15.24 7.65l.07-10.999m5.018 10.999v-7.65m5.102 7.65v-7.65m5.049 7.65V14.316"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.5 18.843l-11.547-.003a2.37 2.37 0 0 1-2.37-2.371v-2.094m5.107-.029v4.495"></svg:path>`,
})
export class ArcticonsKaracaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
