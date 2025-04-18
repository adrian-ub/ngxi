import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiAccessibilitySolidIcon],svg[mynaui-accessibility-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m10.5-4.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zM8.143 8.764a.75.75 0 0 0-.286 1.472l3.393.66v1.567l-1.544 3.752a.75.75 0 0 0 1.388.57L12 14.582l.906 2.203a.75.75 0 0 0 1.387-.57l-1.543-3.752v-1.567l3.393-.66a.75.75 0 1 0-.286-1.472L12 9.514z"></svg:path>`,
})
export class MynauiAccessibilitySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
