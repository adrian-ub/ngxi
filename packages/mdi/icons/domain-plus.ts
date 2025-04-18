import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDomainPlusIcon],svg[mdi-domain-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7V3H2v18h11.35a5.8 5.8 0 0 1-.35-2h-1v-2h1.35a5 5 0 0 1 .65-1.31V15h-2v-2h2v-2h-2V9h8v4.09a5.6 5.6 0 0 1 2 .72V7M6 19H4v-2h2m0-2H4v-2h2m0-2H4V9h2m0-2H4V5h2m4 14H8v-2h2m0-2H8v-2h2m0-2H8V9h2m0-2H8V5h2m6 8h2v-2h-2m0 0v2h2v-2m-2 0v2h2v-2m2 4v3h3v2h-3v3h-2v-3h-3v-2h3v-3Z"></svg:path>`,
})
export class MdiDomainPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
