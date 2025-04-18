import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCoachLampVariantIcon],svg[mdi-coach-lamp-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 2L12 4l-2 2.31L5 9h2l2.5 9l2.5 2l.5 2h1l.5-2l2.5-2L19 9h2l-5-2.69L14 4l-.5-2M9 9h8l-2.22 8h-3.56M3 14v8h8.5l-.5-2H8l-3-3v-3Z"></svg:path>`,
})
export class MdiCoachLampVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
