import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonOperationIfIcon],svg[carbon-operation-if-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 13h2v10h-2z" fill="currentColor"></svg:path><svg:path d="M12 9h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M23 11V9h-3a2 2 0 0 0-2 2v2h-2v2h2v8h2v-8h3v-2h-3v-2z" fill="currentColor"></svg:path>`,
})
export class CarbonOperationIfIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
