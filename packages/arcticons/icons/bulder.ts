import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBulderIcon],svg[arcticons-bulder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m43.448 28.705l-9.607 9.411h-9.554l9.606-9.411z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.893 9.884h-9.554L4.5 28.753v8.797L28.541 14l5.405 5.295l-9.607 9.41h9.554l9.607-9.41z"></svg:path>`,
})
export class ArcticonsBulderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
