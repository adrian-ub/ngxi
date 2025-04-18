import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorAddStarburst24Icon],svg[fluent-color-add-starburst-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorAddStarburst240)" d="M12.793 1.383a1 1 0 0 0-1.579 0L9.801 3.2a.25.25 0 0 1-.291.079L7.378 2.41a1 1 0 0 0-1.367.79l-.315 2.28a.25.25 0 0 1-.213.213l-2.28.315a1 1 0 0 0-.79 1.367l.868 2.132a.25.25 0 0 1-.079.291l-1.816 1.413a1 1 0 0 0 0 1.579l1.816 1.413a.25.25 0 0 1 .079.291l-.867 2.132a1 1 0 0 0 .79 1.367l2.279.315a.25.25 0 0 1 .213.213l.315 2.28a1 1 0 0 0 1.367.79l2.132-.868a.25.25 0 0 1 .291.079l1.413 1.816a1 1 0 0 0 1.579 0l1.413-1.816a.25.25 0 0 1 .291-.079l2.131.867a1 1 0 0 0 1.368-.79l.315-2.279a.25.25 0 0 1 .213-.213l2.28-.315a1 1 0 0 0 .789-1.367l-.867-2.132a.25.25 0 0 1 .079-.291l1.816-1.413a1 1 0 0 0 0-1.579l-1.816-1.413a.25.25 0 0 1-.079-.291l.867-2.132a1 1 0 0 0-.79-1.367l-2.279-.315a.25.25 0 0 1-.213-.213l-.315-2.28a1 1 0 0 0-1.367-.79l-2.132.868a.25.25 0 0 1-.291-.079z"></svg:path><svg:path fill="url(#fluentColorAddStarburst241)" fill-opacity=".95" d="M12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 0 1.5h-3.5v3.5a.75.75 0 0 1-1.5 0v-3.5h-3.5a.75.75 0 0 1 0-1.5h3.5v-3.5A.75.75 0 0 1 12 7"></svg:path><svg:defs><svg:radialgradient id="fluentColorAddStarburst240" cx="0" cy="0" r="1" gradientTransform="matrix(-23.9474 -42.34411 40.5584 -22.9375 26.245 26.212)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFC470"></svg:stop><svg:stop offset=".251" stop-color="#FF835C"></svg:stop><svg:stop offset=".55" stop-color="#F24A9D"></svg:stop><svg:stop offset=".814" stop-color="#B339F0"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorAddStarburst241" x1="16.305" x2="5.813" y1="19.823" y2="13.027" gradientUnits="userSpaceOnUse"><svg:stop offset=".024" stop-color="#FFC8D7"></svg:stop><svg:stop offset=".807" stop-color="#fff"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorAddStarburst24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
