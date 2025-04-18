import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandMongodbIcon],svg[tabler-brand-mongodb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v19m6-10.773c0 3.273-1.812 4.77-6 9.273c-4.188-4.503-6-6-6-9.273C6 6.773 9.071 4.3 12 2c2.929 2.3 6 4.773 6 9.227"></svg:path>`,
})
export class TablerBrandMongodbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
