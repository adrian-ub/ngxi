import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDoNotDisturbIcon],svg[mdi-do-not-disturb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m5 11H7v-2h10v2z" fill="currentColor"></svg:path>`,
})
export class MdiDoNotDisturbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
