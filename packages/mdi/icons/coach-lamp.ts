import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCoachLampIcon],svg[mdi-coach-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 5l-1-3h-2l-1 3l-6 3h2l.6 3H4V7H2v10h2v-4h5l1 5l2 2l1 2h2l1-2l2-2l2-10h2m-5.84 9h-4.32L10 8h8Z"></svg:path>`,
})
export class MdiCoachLampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
