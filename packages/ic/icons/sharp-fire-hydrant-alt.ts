import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpFireHydrantAltIcon],svg[ic-sharp-fire-hydrant-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11h-3V8h2V6h-2.35a5.99 5.99 0 0 0-11.3 0H4v2h2v3H3v6h3v3H4v2h16v-2h-2v-3h3zm-9 6.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5"></svg:path><svg:circle cx="12" cy="14" r="1.5" fill="currentColor"></svg:circle>`,
})
export class IcSharpFireHydrantAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
