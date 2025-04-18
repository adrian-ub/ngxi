import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiAirpodsSolidIcon],svg[mynaui-airpods-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 3.75a4.25 4.25 0 0 0-.25 8.493V18a2.25 2.25 0 0 0 4.5 0V8A4.25 4.25 0 0 0 6.5 3.75m11 0A4.25 4.25 0 0 0 13.25 8v10a2.25 2.25 0 0 0 4.5 0v-5.757a4.25 4.25 0 0 0-.25-8.493"></svg:path>`,
})
export class MynauiAirpodsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
