import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiGraphIcon],svg[flat-ui-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F29C1F" fill-rule="evenodd" d="M80 100L56 0H44L20 100h13l17-73.914L67 100z" clip-rule="evenodd"></svg:path><svg:path fill="#ECF0F1" fill-rule="evenodd" d="M0 10h100v62H0z" clip-rule="evenodd"></svg:path><svg:path fill="none" stroke="#E64C3C" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4" d="m10 61l13.024-13.024L29 53l16.988-16.012L55 46l15-15l5 5l15-15" clip-rule="evenodd"></svg:path><svg:path fill="#E57E25" fill-rule="evenodd" d="M73.28 72H60.56l.46 2h12.74zm-47.04 2h12.74l.46-2H26.72z" clip-rule="evenodd"></svg:path>`,
})
export class FlatUiGraphIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
