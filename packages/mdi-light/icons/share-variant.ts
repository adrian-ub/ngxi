import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightShareVariantIcon],svg[mdi-light-share-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.7 6.92l-6.89 4.02c.12.33.19.69.19 1.06s-.07.73-.19 1.06l6.89 4.02A2.996 2.996 0 0 1 21 19c0 1.66-1.34 3-3 3s-3-1.34-3-3c0-.37.07-.73.19-1.06L8.3 13.92A2.996 2.996 0 0 1 3 12a2.996 2.996 0 0 1 5.3-1.92l6.89-4.02C15.07 5.73 15 5.37 15 5c0-1.66 1.34-3 3-3s3 1.34 3 3a2.996 2.996 0 0 1-5.3 1.92M18 21c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .9-2 2s.9 2 2 2M6 14c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .9-2 2s.89 2 2 2m12-7c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .9-2 2s.9 2 2 2"></svg:path>`,
})
export class MdiLightShareVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
