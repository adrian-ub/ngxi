import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityFilterGridCircleSolidIcon],svg[clarity-filter-grid-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M8 11v1.12a.5.5 0 0 0 .15.35l7.28 7.36a.5.5 0 0 1 .15.35v6.89a.5.5 0 0 0 .28.45l3.95 1.41a.5.5 0 0 0 .72-.45v-8.39a.54.54 0 0 1 .18-.35l7.12-7.25a.5.5 0 0 0 .15-.35V11Z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityFilterGridCircleSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
