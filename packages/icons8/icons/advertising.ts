import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8AdvertisingIcon],svg[icons8-advertising-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30 4.656l-1.28.375L5.812 12H2v8h3.813l1.968.594l-.03.093v.032c-.642 2.112.547 4.46 2.75 5.124c.01.003.022-.003.03 0c2.123.645 4.473-.53 5.126-2.75l.03-.094l13.033 3.97l1.28.374zm-2 2.688v17.312L6.28 18.03L6.157 18H4v-4h2.156l.125-.03L28 7.343zM9.687 21.187l4.094 1.22l-.03.093v.03c-.344 1.17-1.586 1.742-2.656 1.407c-1.17-.343-1.772-1.554-1.438-2.625v-.03z"></svg:path>`,
})
export class Icons8AdvertisingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
