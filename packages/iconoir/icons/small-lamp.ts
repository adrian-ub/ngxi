import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSmallLampIcon],svg[iconoir-small-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6.872 3.428l-2.64 8.8a.6.6 0 0 0 .574.772h14.388a.6.6 0 0 0 .574-.772l-2.64-8.8A.6.6 0 0 0 16.554 3H7.446a.6.6 0 0 0-.574.428M12 17v-2m-3.4 6h6.8c.331 0 .595-.268.542-.596C15.763 19.29 15.026 17 12 17s-3.763 2.29-3.942 3.404c-.053.328.21.596.542.596"></svg:path>`,
})
export class IconoirSmallLampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
