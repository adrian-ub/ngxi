import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8TurkishLiraIcon],svg[icons8-turkish-lira-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4v5.906L8 11v2l3-1.094v2L8 15v2l3-1.094V28h1c5.76 0 10.828-3.85 12.344-9.406l.625-2.344l-1.94-.5l-.625 2.313c-1.19 4.36-4.977 7.36-9.406 7.78V15.19L19 13v-2l-6 2.188v-2L19 9V7l-6 2.188V4z"></svg:path>`,
})
export class Icons8TurkishLiraIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
